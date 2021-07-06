import React, {useCallback, useContext, useRef, useState} from "react";
import styled from "styled-components";
import {DndProvider} from "react-dnd";
import {TouchBackend} from 'react-dnd-touch-backend';
import {HTML5Backend} from "react-dnd-html5-backend";
import './AuditTask.css';
import QuickPinchZoom, {
    make2dTransformValue,
    make3dTransformValue,
    hasTranslate3DSupport
} from "react-quick-pinch-zoom";
import {auditBg} from "../../../constants/images";
import {getPlanetById} from "../../../utils/getPlanetById";
import {Background, Image} from "../../shared/Background";
import {Planet, PlanetName} from "../../shared/PlanetName";
import {CategoryField} from "./CategoryField";
import {CATEGORIES_SUBJECTS, CATEGORIES_TITLE} from "../../../planets.config";
import {PlanetWrapper} from "./PlanetWrapper";
import {getProgressBarAuditProperties} from "../../../utils/getProgressBarAuditProperties";
import {ProgressContext} from "../../../context/ProgressContext";
import {TurnLeft} from "../../shared/svg/TurnLeft";
import {TurnRight} from "../../shared/svg/TurnRight";

const Wrapper = styled.div`
    display: grid;
    overflow: hidden;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 20.38% 71px auto;
    @media screen and (min-width: 640px){
        display: block;
        padding-top: 50px;
    }
`

const PlanetInfo = styled.div`
    margin-top: auto;
    position: relative;
    z-index: 12;
`

const Buttons = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    width: 100%;
    bottom: 0;
    
    @media screen and (min-width: 640px){
        bottom: 20px;
    }
`

const CategoriesWrapper = styled.div`
    position: absolute;
    display: flex;
    bottom: 80px;
    justify-content: space-between;
    width: 100%;      
    padding: 0 8.5%;
    z-index: 100;
    
    @media screen and (min-width: 640px){
        padding: 0 10px;
        bottom: 110px;
    }
`

const ProgressBar = styled.div`
    position: relative;
    width: 348px;
    margin: auto;
    height: 12px;
    background: #E3E3E3;
    border-radius: 3px;
    z-index:300;
    @media screen and (max-width: 350px) {
        width: 270px;
    }
    @media screen and (min-width: 640px) {
        width: 300px;
    }
`

const ActiveProgress = styled(ProgressBar)`
    position: absolute;
    background: #00BDFF;
    ${(props) => props};

`

const TurnBtnLeft = styled(TurnLeft)`
    width: 65px;
    height: 65px;
`

const TurnBtnRight = styled(TurnRight)`
    margin-left: 30px;
    width:65px;
    height: 65px;
`

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const use3DTransform = hasTranslate3DSupport() && !isSafari;

const makeTransformValue = use3DTransform
    ? make3dTransformValue
    : make2dTransformValue;

export const AuditTask = () => {
    const planetAudit = useRef(null);
    const [rotate, setRotate] = useState(0)
    const [scale, setScale] = useState(1);
    const [canPinch, setCanPinch] = useState(false);
    const [isPinchEnable, setIsPinchEnable] = useState(true);
    const [chosenSubjects, setChosenSubjects] = useState([]);
    const [isDragEnable, setIsDragEnable] = useState(false);
    const [position, setPosition] = useState({x:0, y: 0});
    const [startPosition, setStartPosition] = useState({x:0, y: 0});
    const [isDragging, setIsDragging] = useState(false);

    const { setNext } = useContext(ProgressContext);

    const subjects = getPlanetById('3').subjects;

    const {memory, home, work, habit} = subjects;

    const startSubjects = memory.concat(home).concat(work).concat(habit);

    const [allSubjects, setAllSubjects] = useState(startSubjects);

    const innerRef = useRef(null);

    const onUpdate = ({x, y, scale}) => {
        const {current: div} = innerRef;
        if (!canPinch) setCanPinch(true);
        if (div) {
            const value = makeTransformValue({x, y, scale});
            div.style.setProperty("transform", value);
        }
    };

    const getCategory = (id) => {
        const categoryId = Object.values(CATEGORIES_SUBJECTS).indexOf(Object.values(CATEGORIES_SUBJECTS).find(x=> x.includes(id)));
        return Object.keys(CATEGORIES_SUBJECTS)[categoryId];
    }
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    const disablePinch = (e) => {
        setIsPinchEnable(false);
        setIsDragEnable(false);
        if (!isTouchDevice()) e.stopPropagation();

    }

    const enablePinch = () => {
        setIsPinchEnable(true);
        setIsDragEnable(true);
    }

    const onDragEnd = (id) => {
        enablePinch();
        const subject = allSubjects.find(subj=> subj.id === id);
        const subjId = allSubjects.indexOf(subject);
        setAllSubjects(subjects => subjects.filter((subject, id)=> id!==subjId));
        setChosenSubjects(chosenSubjects => [...chosenSubjects, subject]);

        if (chosenSubjects.length + 1 === startSubjects.length) {
            setTimeout(()=> setNext(), 500);
        }

    }

    const onWheelZoom = useCallback(
        (e) => {
            const step = 0.025;
            if (scale+e.deltaY*step < 1) {
                setScale(1);
                setIsDragEnable(false);
                return;
            }
            if (!isDragEnable) setIsDragEnable(true);
            if (scale+e.deltaY*step > 4) {
                setScale(4);
                return;
            }
            setScale(scale=> scale + e.deltaY*step);
        },
        [scale, setScale],
    );

    const onPlanetDragStart = (e) => {
        if (!isDragEnable) return;
        setIsDragging(true);
        const x = e.pageX;
        const y = e.pageY;
        setStartPosition({x,y});
    }

    const onPlanetDragEnd = () => {
        setIsDragging(false);
    }

    const onPlanetDrag = (e) => {
        if (!isDragging) return;
        const valueX = e.pageX;
        const valueY = e.pageY;

        const x = -(startPosition.x - valueX);
        const y = -(startPosition.y - valueY);

        if (Math.abs(x) > innerRef.current.clientWidth / 3) {
            return;
        }
        if (Math.abs(y) > innerRef.current.clientHeight / 4) {
            return;
        }
        setPosition({x,y});
    }


    return (
        <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
            <Wrapper>
                <Background>
                    <Image src={auditBg} alt={''}/>
                </Background>
                <PlanetInfo>
                    <Planet> планета </Planet>
                    <PlanetName>АУДИТ</PlanetName>
                </PlanetInfo>
                <ProgressBar>
                    {chosenSubjects.map((subj,id)=> {
                           return <ActiveProgress {...getProgressBarAuditProperties(id, id===(chosenSubjects.length-1))}/>
                        }
                    )}
                </ProgressBar>

                {isTouchDevice() ?
                    <QuickPinchZoom
                        onUpdate={onUpdate}
                        ref={planetAudit}
                        enabled={isPinchEnable}
                        inertia={false}
                    >
                        <PlanetWrapper
                            innerRef={innerRef}
                            allSubjects={allSubjects}
                            disablePinch={disablePinch}
                            enablePinch={enablePinch}
                            getCategory={getCategory}
                            rotate={rotate}
                        />
                    </QuickPinchZoom>
                : <div onWheel={onWheelZoom}>
                      <PlanetWrapper
                            innerRef={innerRef}
                            allSubjects={allSubjects}
                            disablePinch={disablePinch}
                            enablePinch={enablePinch}
                            getCategory={getCategory}
                            rotate={rotate}
                            scale={scale}
                            onPlanetDrag={onPlanetDrag}
                            onPlanetDragEnd={onPlanetDragEnd}
                            onPlanetDragStart={onPlanetDragStart}
                            position={position}
                        />
                    </div>
                }
                <CategoriesWrapper>
                    {Object.keys(subjects).map((category, i) => (<CategoryField
                        title={CATEGORIES_TITLE[category]}
                        key={category}
                        category={category}
                        ind={i}
                        onDragEnd={onDragEnd}
                        shownSubjects={chosenSubjects}
                    />))}
                </CategoriesWrapper>
                <Buttons>
                    <TurnBtnLeft onClick={()=>setRotate(rotate=>rotate - 15)}/>
                    <TurnBtnRight onClick={()=>setRotate(rotate=>rotate + 15)}/>
                </Buttons>
            </Wrapper>
        </DndProvider>
    );
}