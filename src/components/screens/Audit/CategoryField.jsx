import React, {useState} from "react";
import styled from 'styled-components';
import {useDrop} from "react-dnd";
import {CATEGORIES_SUBJECTS} from "../../../planets.config";
import {getRandomNumber} from "../../../utils/getRandomNumber";
import {shake} from "../../../utils/keyframes";

const Wrapper = styled.div`
  position: relative;
`

const Title = styled.p`
    position: absolute;
    white-space: pre-wrap;
    text-transform: uppercase;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    letter-spacing: 0.255em;
    width: 100px;
    user-select: none;
    ${({styles}) => styles}
`
const Field = styled.div`
    width: 74px;
    height: 74px;
    background: #E3E3E3;
    border-radius: 3px;
    user-select: none;

    & svg {
      position: absolute;
    }
    
    @media screen and (min-width: 640px){
        width: 65px;
        height: 65px;
    }
`
const ErrorField = styled(Field)`
    animation: ${shake} 0.8s;
    animation-iteration-count: infinite;
    border: 1px solid red;
   
`

export const CategoryField = (props) => {
    const {title, ind, onDragEnd, shownSubjects, category} = props;
    const [isErr, setIsErr] = useState(false);
    const [shownStyles, setShownStyles] = useState([]);
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'subjectAudit',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
        drop: (item) => {
            if (item.category === category) {
                setShownStyles(styles=> [...styles, {
                    left: getRandomNumber(0,40) + "%",
                    top: getRandomNumber(0,40) + "%",
                    width: '60%',
                    height: '60%'
                }])
                onDragEnd(item.id);
            }
            else {
                setIsErr(true);
                setTimeout(()=> setIsErr(false), 1000)
            }
        },
    });

    const styles = `transform: translate(-50%, 0);` + (ind%2===1 ? `top: -25px; left: 50%;` : `bottom: -25px; left: 50%;`)
    return <Wrapper>
        {ind%2===1&&<Title styles={styles}>{title}</Title>}
        {isErr ? <ErrorField>
                {shownSubjects.filter(subject => CATEGORIES_SUBJECTS[category].includes(subject.id)).map((subject,id) => {
                    return subject.svg({key: subject.id, style:shownStyles[id]})
                })}
            </ErrorField>
            : <Field ref={drop}>
            {shownSubjects.filter(subject => CATEGORIES_SUBJECTS[category].includes(subject.id)).map((subject,id) => {
                return subject.svg({key:subject.id,style: shownStyles[id]})
            })}
        </Field>}
        {ind%2===0&&<Title styles={styles}>{title}</Title>}
    </Wrapper>
}