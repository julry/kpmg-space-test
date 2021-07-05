import React, {forwardRef, useEffect, useRef, useImperativeHandle, useState} from 'react';
import HammerJS from 'hammerjs';

const HammerComponent = (props, ref) => {
    const { children, options } = props;
    const wrapperRef = useRef();
    const [hammerInstance, setHammerInstance] = useState(null);

    useImperativeHandle(ref, () => ({
        hammer: hammerInstance,
    }), [hammerInstance]);

    useEffect(() => {
        setHammerInstance(new HammerJS(wrapperRef.current, options));
    }, [options]);

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    );
};

export const Hammer = forwardRef(HammerComponent);
