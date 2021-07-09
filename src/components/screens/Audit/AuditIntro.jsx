import React, {useContext} from 'react';
import styled from 'styled-components';
import {ModalInfo} from "../../shared/ModalInfo";
import {LogoStyled} from "../../shared/LogoStyled";
import {Background, Image} from "../../shared/Background";
import {introBg} from "../../../constants/images";
import {ProgressContext} from "../../../context/ProgressContext";

const KPMGLogo = styled(LogoStyled)`
    position: absolute;
    top: 1.8043vh;
    z-index: 10;
    left: 8.6956vw;
    @media screen and (min-width: 640px){
      top: 50px;
      left: 10px;
    }
`

const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    
    @media screen and (max-width: 350px){
        font-size: 12px;
        line-height: 15px;
    }
`


export const AuditIntro = () => {
    const { height } = useContext(ProgressContext);
    const contentHeight = height.split('px')[0];

    return <>
        <Background>
            <Image src={introBg} alt={''}/>
        </Background>
        {contentHeight > 470 && <KPMGLogo/>}
        <ModalInfo>
            <Text>
                {'Ты справился со всеми испытаниями планет «Логос» и «Сториос»! Осталось\nсамое сложное — надо помочь космонавтам планеты «Аудит» провести\nинвентаризацию. \nЗдесь ты найдешь 8 предметов, которые можно разделить на четыре группы: \n'}
                <b>{'домашние предметы, рабочие штучки, что-то, что космонавты захватили с'} </b>
                <b>{'\nсобой по привычке'}</b> {'и'} <b>{'предметы, напоминающие космонавтам о Земле.'} </b>
                {'\nКак только увидишь один из предметов — перетащи его в специально\n' +
                'отведенное окошко, а заполняющаяся строка сверху покажет, как\n' +
                'продвигается твоя инвентаризация.\n' +
                'Удачи!'}
            </Text>
            <br />
            <Text>
                {'Планету можно крутить и увеличивать!\nКогда найдешь предмет — жми на него, и он увеличится :)\nПосле этого тащи предмет в ячейку категории'}
            </Text>
        </ModalInfo>
    </>
}