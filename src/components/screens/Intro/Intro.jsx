import React, {useContext} from "react";
import styled from 'styled-components';
import { ProgressContext } from '../../../context/ProgressContext';
import {LogoStyled} from "../../shared/LogoStyled";
import {Background, Image} from "../../shared/Background";
import {introBg} from "../../../constants/images";
import {StartBtn} from "../../shared/StartBtn";

const Wrapper = styled.div`
  padding: 3.0843% 8.6957vw;
  white-space: pre-wrap;
  @media screen and (min-width: 640px){
      padding: 28px 15px;
  }
`


const Title = styled.h1`
    font-weight: 300;
    font-size: 40px;
    line-height: 108%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-top: 1.7663%;
    
    @media screen and (max-width: 345px){
        font-size: 30px;
    }
`
const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    margin: 4.4837% 0;
    @media screen and (max-width: 345px){
        font-size: 14px;
    }
`

export const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    return <Wrapper>
        <Background>
            <Image src={introBg} alt={''}/>
        </Background>
        <LogoStyled />
        <Title>
            ОДНО ПУТЕШЕСТВИЕ,
            ТЫСЯЧА ПУТЕЙ
        </Title>
        <Text>
            {'Вселенная загадочна и бесконечна.\nА нашей задачей, конечно же, остается познать все ее секреты.\nКак? Методом проб и ошибок!\nКПМГ открыли три новые планеты, полные тайн и загадок.\nИсследуешь их?'}
        </Text>
        <StartBtn onClick={setNext} />
    </Wrapper>
}

