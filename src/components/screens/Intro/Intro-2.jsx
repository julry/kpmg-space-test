import React, {useContext, useState} from "react";
import styled from 'styled-components';
import {ProgressContext} from "../../../context/ProgressContext";
import {LogoStyled} from "../../shared/LogoStyled";
import {Background, Image} from "../../shared/Background";
import {introBg} from "../../../constants/images";
import {StartBtn} from "../../shared/StartBtn";
import {PlanetName} from "../../shared/PlanetName";
import {decorAnimation, fade} from "../../../utils/keyframes";
import {IntroDecor} from "../../shared/svg/IntroDecor";
import {reachMetrikaGoal} from "../../../utils/reachMetrikaGoal";

const Wrapper = styled.div`
  padding: 3.0843% 8.6957vw;
  white-space: pre-wrap;
  overflow: hidden;
  @media screen and (min-width: 640px){
      padding: 40px 15px;
  }
`

const NameWrapper = styled.div`
    position: absolute;
    z-index: 10;
    max-width: 240px;
`

const Name = styled(PlanetName)`
    font-size: 30px;
    line-height: 36px;
    text-align: left;
`

const Description = styled.p`
    margin-top: 8px;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    opacity: 0;
    animation: ${fade} 1.5s;
    animation-fill-mode: forwards;
    animation-delay: ${props=> props.delay};
`
const LogosWrapper = styled(NameWrapper)`
    top: 15.85%;
    left: 29.95%;
    @media screen and (min-width: 640px){
      top: 18%;
    }
`

const StoriosWrapper = styled(NameWrapper)`
    top: 48.505%;
    left: 8.4541%;
    @media screen and (min-width: 640px){
      top: 45.505%;
    }
`

const AuditWrapper = styled(NameWrapper)`
    top: 71.8152%;
    left: 7.7294%;
    @media screen and (min-width: 640px){
      top: 66.8152%;
    }
`

const IntroDecorStyled = styled(IntroDecor)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 75%;
`

const DecorWrapper = styled.div`
    overflow: hidden;
    width: 30vw;
    position: absolute;
    right: 0;
    height: 20%;
    
    @media screen and (min-width: 640px){
        width: 140px;
        height: 130px;
    }
`

const IntroDecorAnimated = styled(IntroDecorStyled)`
    animation: ${decorAnimation} 1.5s;
    animation-fill-mode: forwards
`

const NextBtn = styled(StartBtn)`
  right: 9.66%;
  bottom: 5%;
  width: 49px;
  height: 49px;
  
  & svg{
    width: 33px;
    height: 33px;
  }
`
const STAGE_COUNT = 2;
export const Intro2 = () => {
    const { setNext } = useContext(ProgressContext);
    const [stage, setStage] = useState(1);

    const onStartTest = () => {
        reachMetrikaGoal('start');
        setNext()
    }

    return <Wrapper>
        <DecorWrapper>
            {stage ===1 ? <IntroDecorStyled /> : <IntroDecorAnimated />}
        </DecorWrapper>
        <Background>
            <Image src={introBg} alt={''}/>
        </Background>
        <LogoStyled />
        <LogosWrapper>
            <Name>
                Логос
            </Name>
            {stage !== 1 && <Description>
                На первой планете живут мудрецы, которые проверят твою логику
                и сообразительность.
            </Description>}
        </LogosWrapper>
        <StoriosWrapper>
            <Name>
                Сториос
            </Name>
            {stage !== 1 && <Description delay={'1s'}>
                Планета славится своими историками, которые помогут тебе раскрыть тайны своих преданий.
            </Description>}
        </StoriosWrapper>
        <AuditWrapper>
            <Name>
                Аудит
            </Name>
            {stage !== 1 && <Description delay={'2s'}>
                Эта планета - родина поселения аудиторов! Ребята не из простых :)
                Может гении и господствуют над хаосом, но нужно иногда
                наводить порядок.
                Тем более, что космос с греческого так и переводится. Поможешь? :)
            </Description>}
        </AuditWrapper>
        <NextBtn onClick={()=> stage < STAGE_COUNT ? setStage(stage => stage + 1) : onStartTest()} />
    </Wrapper>
}

