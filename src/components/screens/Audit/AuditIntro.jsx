import React from 'react';
import styled from 'styled-components';
import {ModalInfo} from "../../shared/ModalInfo";
import {LogoStyled} from "../../shared/LogoStyled";

const KPMGLogo = styled(LogoStyled)`
    position: absolute;
    top: 3.8043vh;
    z-index: 10;
    left: 8.6956vw;
    @media screen and (min-width: 640px){
      top: 50px;
      left: 10px;
    }
`
export const AuditIntro = () => {
    return <>
        <KPMGLogo/>
        <ModalInfo
            text={'Ты справился со всеми испытаниями планет «Логос» и «Сториос»! Осталось\n' +
                'самое сложное — надо помочь космонавтам планеты «Аудит» провести\n' +
                'инвентаризацию. \n' +
                'Здесь ты найдешь 12 предметов, которые можно разделить на четыре группы: \n' +
                'домашние предметы, рабочие штучки, что-то, что космонавты захватили с\n' +
                'собой по привычке и предметы, напоминающие космонавтам о Земле. \n' +
                'Как только увидишь один из предметов — перетащи его в специально\n' +
                'отведенное окошко, а заполняющаяся строка сверху покажет, как\n' +
                'продвигается твоя инвентаризация.\n' +
                'Удачи!'
            }
        />
    </>
}