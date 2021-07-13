import React from "react";
import styled from 'styled-components';
import {LogoStyled} from "../shared/LogoStyled";
import {Planet} from "../shared/PlanetName";
import {Background, Image} from "../shared/Background";
import {astronaut, introBg} from "../../constants/images";
import {getShareParams} from "../../utils/getShareParams";

const Wrapper = styled.div`
    padding: 3.8043% 3.6971% 0 8.5956%;
    white-space: pre-wrap;
    
    @media screen and (min-width: 640px){
          padding: 24px 0 0 10px;
    }
`
const Text = styled.p`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.15em;
    padding-top: 1.7174%;
    
    @media screen and (max-width: 340px){
        font-size: 12px;
        line-height: 15px;
    }
`

const Title = styled(Planet)`
    text-align: left;
    margin-top: 6.6467%;
`

const Blackout = styled.div`
    position:absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 1.18%, rgba(0, 0, 0, 0) 36.5%);
`

const Blackout2 = styled(Blackout)`
  background: linear-gradient(0.41deg, rgba(2, 9, 69, 0.6) 2.82%, rgba(0, 0, 0, 0) 75.38%);
`
const Blackout3 = styled(Blackout)`
  height: 73%;
  background: linear-gradient(178.97deg, rgba(0, 0, 0, 0.5) 0.88%, rgba(0, 0, 0, 0) 103.2%);
`
const Blackout4 = styled(Blackout)`
  background: linear-gradient(0.41deg, rgba(2, 9, 69, 0.3) 2.82%, rgba(0, 0, 0, 0) 75.38%);
`
const Blackout5 = styled(Blackout)`
  background: rgba(3, 55, 115, 0.4);
`
const Blackout6 = styled(Blackout)`
  background: rgba(0, 0, 0, 0.3);
`

const Link = styled.a`
    position: fixed;
    bottom: 4.8913%;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.255em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    
    &:active{
        color: #FFFFFF;
    }
    
     @media screen and (min-width: 640px){
        bottom: 25px;
        width: 325px;
        margin-left: -5px;
    }
    
    @media screen and (max-width: 340px){
        font-size: 14px;
    }
`

const ImgWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
     @media screen and (min-width: 640px){
        bottom: -37px;
    }
`

const AstronautPic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const Final = () => {
    return <Wrapper>
        <Background>
            <Image src={introBg} alt={''}/>
            <Blackout6 />
            <Blackout5 />
            <Blackout4 />
            <Blackout3 />
            <Blackout2 />
            <ImgWrapper>
                <AstronautPic src={astronaut} alt={''}/>
            </ImgWrapper>
            <Blackout />
        </Background>
        <LogoStyled />
        <Title>Вау, да ты мастер!</Title>
        <Text>{'Тебе удалось продемонстрировать \nсвой профессионализм жителям \nпланет, а инвентаризация \nкосмонавтов прошла безукоризненно! \nОсталось только поделиться своим достижением на страничке в ВК, чтобы каждый знал, кто здесь настоящий исследователь!\n\nМежду репостнувшими КПМГ разыграет призы :)\nНе забудь добавить в публикацию хэштег #аудиттыпростокосмос, чтобы при розыгрыше твой пост не потерялся!'}</Text>
        <Link target={'_blank'} href={getShareParams()}>поделиться результатом</Link>
    </Wrapper>
}