import React from "react";
import styled from 'styled-components';
import {auraFade} from "../../../utils/keyframes";

const Wrapper = styled.svg`
  animation: ${auraFade} 2.5s infinite;
`
export  const Aura = (props) => {
    const { viewBox } = props;
    const cx = viewBox ? viewBox.split(' ')[2]/2 : 188;
    const cy = viewBox ? viewBox.split(' ')[3]/2 : 188.5;
    const rx = cx / 1.1325;
    const ry = cy / 1.1325;
    return (
            <Wrapper {...props}>
                <ellipse cx={cx} cy={cy} rx={cx} ry={cy} fill="#00BDFF" fillOpacity="0.1"/>
                <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#00BDFF" fillOpacity="0.1"/>
            </Wrapper>
    );
}