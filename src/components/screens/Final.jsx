import React from "react";
import styled from 'styled-components';
import {LogoStyled} from "../shared/LogoStyled";
import {Planet} from "../shared/PlanetName";

const Wrapper = styled.div`
    padding: 3.8043vh 5.6971vw 0 8.5956vw;
    white-space: pre-wrap;
    
    @media screen and (min-width: 640px){
          padding: 24px 0 0 10px;
    }
`
const Text = styled.p`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.15em;
    padding-top: 2.7174vh;
`

const Title = styled(Planet)`
    text-align: left;
    margin-top: 9.6467vh;
`

const Link = styled.p`
    position: fixed;
    bottom: 4.8913vh;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.255em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #FFFFFF;
    
    &:active{
        color: #FFFFFF;
    }
    
     @media screen and (min-width: 640px){
        bottom: 25px;
        font-size: 16px;
        width: 325px;
        margin-left: -5px;
    }
`
export const Final = () => {
    return <Wrapper>
        <LogoStyled />
        <Title>Вау, да ты мастер!</Title>
        <Text>{'Тебе удалось продемонстрировать \nсвой профессионализм жителям \nпланет, а инвентаризация \nкосмонавтов прошла безукоризненно! \nОсталось только поделиться своим достижением на страничке в ВК, чтобы каждый знал, кто здесь настоящий исследователь!\n\nМежду репостнувшими КПМГ разыграет призы :)'}</Text>
        <Link>поделиться результатом</Link>
    </Wrapper>
}