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
  padding: 7.88% 1vw 0;
  & svg{
  display: block;
    width: 100%;
  }
  
  @media screen and (min-width: 640px){
      padding: 70px 15px;
  }
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
            <PlanetName>{planet.name}</PlanetName>
            {planet.img()}
            <SearchBtn onClick={setNext}>Исследовать</SearchBtn>
    </Wrapper>)
}