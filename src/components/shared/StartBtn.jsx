import {PlayIcon} from "./svg/PlayIcon";
import React from "react";
import styled from "styled-components";
import {Button} from "./Button";

const Btn = styled(Button)`
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
  position: absolute;
  bottom: 6vh;
  z-index: 100;
  
  & svg{
    width: 10.1449vw;
    height: 10.1449vw;
    max-width: 42px;
    max-height: 42px;
    min-height: 24px;
    min-width: 24px;
  }
`

export const StartBtn = (props) => {
    return <Btn {...props}>
        <PlayIcon />
    </Btn>
}