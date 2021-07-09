import React from "react";
import styled from "styled-components";
import {LogoStyled} from "../../shared/LogoStyled";
import {Background, Image} from "../../shared/Background";
import {introBg} from "../../../constants/images";
import {ModalInfo} from "../../shared/ModalInfo";

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

export const LogosEnd = () => {
    return <>
        <Background>
            <Image src={introBg} alt={''}/>
        </Background>
        <KPMGLogo/>
        <ModalInfo text={'Ты молодец! С логикой у тебя все отлично, и жители Логоса указали тебе путь на планету Сториос. \n' +
        'Удачи в дальнейшем пути!'}/>
    </>
}