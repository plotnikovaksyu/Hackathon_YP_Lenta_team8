// import React from "react";
import { useState, useRef } from "react";
import './Tooltip.css';

function Tooltip({ children, text, ...rest }) {
    const refSetTimeout = useRef();
    const [show, setShow] = useState(false);

    function showTooltip() {
        refSetTimeout.current = setTimeout(() => {
            setShow(true);
        }, 500)
    }

    function hideTooltip() {
        clearTimeout(refSetTimeout.current);
        setShow(false);
    }


    return (
        <div className="tooltip-container">
            <div className={`tooltip-box ${show ? 'visible' : ' '}`}>
                {text}
            </div>
            <div
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                {...rest}
            >
                {children}
            </div>
        </div>
    );
}

export default Tooltip;