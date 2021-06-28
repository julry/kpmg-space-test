import React, {useContext} from "react";
import styled from 'styled-components';
import {ProgressContext} from "../../../context/ProgressContext";
import {LogoStyled} from "../../shared/LogoStyled";

const Wrapper = styled.div`
  padding: 3.0843vh 8.6957vw;
  white-space: pre-wrap;
  @media screen and (min-width: 640px){
      padding: 28px 15px;
  }
`

export const Intro2 = () => {
    const { setNext } = useContext(ProgressContext);

    return <Wrapper>
        <LogoStyled />
        <button onClick={setNext}> go </button>
    </Wrapper>
}

