import {getPlanetById} from "./getPlanetById";

export const getProgressBarAuditProperties = (id, isLast) => {
    let width;
    if (window.innerWidth < 350) {
        width = 33.75;
    } else if (window.innerWidth < 640) {
        width = 43.5;
    }
    else {
        width = 37.5;
    }

    const left = id * width;
    const isFirst = id === 0;
    const borderLeft = isFirst ? '3px' : 0;
    const borderRight = isLast ? '3px' : 0;

    return {
        left: left+'px',
        width: width+'px',
        borderBottomLeftRadius: borderLeft,
        borderTopLeftRadius: borderLeft,
        borderTopRightRadius:borderRight,
        borderBottomRightRadius:borderRight,
    }
}