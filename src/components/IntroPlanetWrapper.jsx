import React, {useContext} from "react";
import styled from 'styled-components';
import {ProgressContext} from "../context/ProgressContext";
import {Button} from "./shared/Button";
import {Planet, PlanetName} from "./shared/PlanetName";
import {Background, Image} from "./shared/Background";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 7.88vh 1vw 0;
  & svg{
    width: 100%;
    height: fit-content;
  }
  @media screen and (min-width: 640px){
      padding: 70px 15px;
  }
`

const Name = styled(PlanetName)`
    margin: -15px 0 10.134vh;
`

const SearchBtn = styled(Button)`
    width: 100%;
    max-width: 276px;
    padding: 13px 18px;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    border-radius: 10px;
`

export const IntroPlanetWrapper = ({planet}) => {
    const { setNext } = useContext(ProgressContext);
    return (<Wrapper>
        <Background>
            <Image src={planet.bgImg} alt={''}/>
        </Background>
            <Planet> планета </Planet>
            <Name>{planet.name}</Name>
            {planet.img()}
            <SearchBtn onClick={setNext}>Исследовать</SearchBtn>
    </Wrapper>)
}