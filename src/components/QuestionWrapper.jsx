import React, {useContext, useState} from "react";
import styled from 'styled-components';
import { ProgressContext } from '../context/ProgressContext';
import {ModalInfo} from "./shared/ModalInfo";
import {ModalTypes} from "../screens.config";
import {Planet, PlanetName} from "./shared/PlanetName";
import {Background, Image} from "./shared/Background";

const Wrapper = styled.div`
    display: grid;
    height: 100%;
    padding-top: 20px;
    grid-template-rows: minmax(max-content, 16.44vh) minmax(62.3641vh, 65.1196vh) 16.5vh;
    @media screen and (min-width: 640px){
        padding-top: 50px;
        grid-template-rows: minmax(max-content, 100px) 470px 125px;
    }
`
const ContentWrapper = styled.div`
    margin: auto;
`
const TaskWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    color: black;
    max-width: 335px;
    padding: 25px 14px;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    white-space: pre-wrap;
    margin-bottom: 2.7174vh;
    
    @media screen and (min-width: 640px){
        max-width: 310px;
        padding-right: 8px;
    }
`

const PlanetNameWrapper = styled.div`
    margin-top: auto;
`
const ProgressWrapper = styled.div`
    width: 336px;
    height: fit-content;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    
    @media screen and (min-width: 640px){
        max-width: 310px;
    }
`

const ProgressBar =  styled.div`
    height: 10px;
    width: 106px;
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translate(0,-50%);
    @media screen and (min-width: 640px){
        max-width: 310px;
        width: 97px;
    }
`
const Point = styled.div`
    height: 39px;
    width: 39px;
    background: #E9E9E9;
    border-radius: 50%;
    position: relative;
    @media screen and (min-width: 640px){
        height: 35px;
        width: 35px;
    }
`
const PointMark = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #7D7D7D;
    @media screen and (min-width: 640px){
        height: 13px;
        width: 13px;
    }
`

const ActivePointMark = styled(PointMark)`
  background: #00BDFF;
`

const  TaskTitle = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: 500;
    margin-top: -15px;
    margin-bottom: 5px;
`

const AnswerWrapper = styled(TaskWrapper)`
    padding: 5px 11px;
    margin-top: 1.0869vh;
    margin-bottom: 0;
    border: 2px solid #FFFFFF;
    cursor: pointer;
`

const ChosenAnswer = styled(AnswerWrapper)`
      background: #DCDCDC;
`

const ChosenAnswerCorrect = styled(ChosenAnswer)`
    border: 2px solid #00FFC2;
`

const ChosenAnswerIncorrect = styled(ChosenAnswer)`
    border: 2px solid #FF1F00;
`
const Attempt = styled.div`
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: white;
    margin-left: 24px;
    
    &:first-child{
      margin: 0;
    }
`

const AttemptWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4.5vh;

    
    @media screen and (min-width:640px){
        margin-top: 20px;
    }
`

export const QuestionWrapper = (props) => {
    const {planet, question} = props;
    const [isModal, setIsModal] = useState(false);
    const [typeModal, setTypeModal] = useState('');

    const { setAnswer, setNext, currentAttempt, setCurrentAttempt, answers } = useContext(ProgressContext);
    const onAnswerClick = (answer) => {
        setAnswer(planet.id, question.id, answer.id);

        if (answer.isCorrect) {
            if (+question.id === planet.questions.length) {
                setCurrentAttempt(0);
            }
            setTimeout(()=> {
                setNext()
            }, 1500);
        }
        else {
            setCurrentAttempt(attempt=> attempt + 1);

            if (currentAttempt === planet.attempts - 1) {
                setTypeModal(ModalTypes.Error);
            }
            else {
                setTypeModal(ModalTypes.Tip);
            }
            setTimeout(()=>setIsModal(true), 1500);
        }

    }

    return <Wrapper onClick={!question ? setNext : ()=>{}} style={!question ? {cursor: 'pointer'} : {}}>
        <Background>
            <Image src={planet.questionBg} alt={''}/>
        </Background>
        <PlanetNameWrapper>
                <Planet> Планета </Planet>
                <PlanetName>{planet.name}</PlanetName>
        </PlanetNameWrapper>
        {question ? <ContentWrapper>
            <TaskWrapper>
                <TaskTitle>Задача {question.id}</TaskTitle>
                <p>{question.text}</p>
            </TaskWrapper>
            {question.answers.map(answer=>{
                return answers[planet.id]&&answers[planet.id][question.id]===answer.id ?
                    answer.isCorrect ?<ChosenAnswerCorrect key={question.id + answer.id + 'correct'}>
                            <p>{answer.text}</p>
                        </ChosenAnswerCorrect>
                        : <ChosenAnswerIncorrect key={question.id + answer.id + 'incorrect'}>
                            <p>{answer.text}</p>
                        </ChosenAnswerIncorrect>
                    : <AnswerWrapper key={question.id + answer.id} onClick={() => onAnswerClick(answer)}>
                         <p>{answer.text}</p>
                    </AnswerWrapper>
            })}
        </ContentWrapper>
            : <ContentWrapper>
                <TaskWrapper>
                    <p>
                        {planet.introText}
                    </p>
                </TaskWrapper>
            </ContentWrapper>
        }
        <div>
        <ProgressWrapper>
            <Point>
                <ActivePointMark />
            </Point>
            {planet.questions.map(q=> {
                let left ='';
                if (window.innerWidth < 640) {
                    left = 12 + (q.id - 1) * 106;
                }
                else {
                    left = 12 + (q.id - 1) * 97;
                }
                const  backgroundBar =  (question && q.id <= question.id) ? '#00BDFF' : '#FFFFFF';
                    return <div key={q.text}>
                        <ProgressBar style={{left: left + 'px', background: backgroundBar}}/>
                        <Point >
                            {question && q.id <= question.id ? <ActivePointMark/> : <PointMark/>}
                        </Point>
                    </div>
                }
            )}
        </ProgressWrapper>
        <AttemptWrapper>
            {planet.attempts > 1 && [...Array(planet.attempts).keys()].map((attempt,id)=>
                <Attempt style={(id+1)<=currentAttempt ? {background:'#FF1F00'} : {}}/>
            )}
        </AttemptWrapper>
            </div>
        {isModal&&<ModalInfo type={typeModal} text={question.tip ?? ''} setIsModal={setIsModal} planet={planet} />}
    </Wrapper>
}