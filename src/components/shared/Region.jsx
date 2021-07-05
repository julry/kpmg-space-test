import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import ZingTouch from 'zingtouch';

const RegionComponent = (props, ref) => {
    const { children } = props;
    const wrapperRef = useRef();
    const [regionInstance, setRegionInstance] = useState(null);

    useImperativeHandle(ref, () => ({
        hammer: regionInstance,
    }), [regionInstance]);

    useEffect(() => {
        setRegionInstance(new ZingTouch.Region(wrapperRef.current));
    }, []);


    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};

export const Region = forwardRef(RegionComponent);
