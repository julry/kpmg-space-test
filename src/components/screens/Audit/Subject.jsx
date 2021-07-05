import React, {useEffect} from "react";
import styled from "styled-components";
import {useDrag, DragPreviewImage} from "react-dnd";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`
export const Subject = (props) => {
    const {category, id, style, children, onDragStart, onDragEnd} = props;

    const [{ opacity }, drag, dragPreview] = useDrag({
        type: "subjectAudit",
        item: () => {
            return { category, id };
        },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            onDragEnd();
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    })

    return (
        <Wrapper ref={drag} onTouchStart={onDragStart} onMouseDown={onDragStart} style={{...style, opacity}}>
            {children}
        </Wrapper>
    )
}