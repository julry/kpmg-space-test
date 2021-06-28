import React, {useContext} from "react";
import styled from 'styled-components';
import {Logo} from "../../shared/svg/Logo";
import { ProgressContext } from '../../../context/ProgressContext';
import {PlayIcon} from "../../shared/svg/PlayIcon";
import {LogoStyled} from "../../shared/LogoStyled";
import {Button} from "../../shared/Button";

const Wrapper = styled.div`
  padding: 3.0843vh 8.6957vw;
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
    margin-top: 1.7663vh;
`
const Text = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    margin: 4.4837vh 0;
`

const StartBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 21.256vw;
  height: 21.256vw;
  max-width: 88px;
  max-height: 88px;
  min-width: 50px;
  min-height: 50px;
  position: fixed;
  bottom: 6vh;
  
  & svg{
    width: 10.1449vw;
    height: 10.1449vw;
    max-width: 42px;
    max-height: 42px;
    min-height: 24px;
    min-width: 24px;
  }
`
export const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    return <Wrapper>
        <LogoStyled />
        <Title>
            ОДНО ПУТЕШЕСТВИЕ,
            ТЫСЯЧА ПУТЕЙ
        </Title>
        <Text>
            {'Вселенная загадочна и бесконечна.\nА нашей задачей, конечно же, остается познать все ее секреты.\nКак? Методом проб и ошибок!\nКПМГ открыли три новые планеты, полные тайн и загадок.\nИсследуешь их?'}
        </Text>
        <StartBtn onClick={setNext}>
            <PlayIcon />
        </StartBtn>
    </Wrapper>
}

