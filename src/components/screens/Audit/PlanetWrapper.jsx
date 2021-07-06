import {Audit} from "../../shared/svg/Audit";
import {Subject} from "./Subject";
import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
    position: relative;
    ${({styles}) => styles};
    transform-origin: 0 0;
`


export const PlanetWrapper = (props) =>{
    const {innerRef,position, onPlanetDragStart, onPlanetDrag,
        onPlanetDragEnd, allSubjects, disablePinch, enablePinch,
        getCategory, rotate, scale} = props;

    return (
        <Wrapper ref={innerRef}>
            <div
                onMouseDown={onPlanetDragStart ?? (() => null)}
                onMouseUp={onPlanetDragEnd ?? (() => null)}
                onMouseMove={onPlanetDrag ?? (() => null)}
                 style={scale ?{transform: `scale(${scale ? scale : 1}) translate(${position.x}px,${position.y}px) rotate(${rotate}deg)`}
                 : { transform: `rotate(${rotate}deg)`}}
            >
                <Audit style={{width: "100%", height: '100%'}}/>
                {allSubjects.map((x, id) => {
                    return <Subject
                        onDragStart={disablePinch}
                        onDragEnd={enablePinch}
                        key={x.id}
                        id={x.id}
                        style={x.styles}
                        category={getCategory(x.id)}
                    >
                        {x.svg()}
                    </Subject>
                })}
            </div>

        </Wrapper>
    )
}