import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useDrag} from "react-dnd";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`
export const Subject = (props) => {
    const {category, id, style, children, onDragStart, onDragEnd} = props;

    const [scale, setScale] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    const [{ opacity }, drag] = useDrag({
        type: "subjectAudit",
        item: () => {
            return isDragging ? { category, id } : null;
        },
        end: (item, monitor) => {
            onEnd();
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    })

    const onStart = (e) =>{
        setScale(3);
        onDragStart(e);
        setIsDragging(true);
    }

    const onEnd = (e) => {
        setScale(1);
        setIsDragging(false);
        onDragEnd(e);
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) return () => { isMounted = false };
    }, []);

    return (
        <Wrapper ref={drag} onTouchStart={onStart} onMouseDown={onStart} style={{...style, opacity, transform:`scale(${scale})`}}>
            {children}
        </Wrapper>
    )
}