import './EventPassive.css';
import { useEffect, useRef } from "react";

export default function EventPassive() {
    const handleWheel = e => e.preventDefault();
    const divRef = useRef(null);
    useEffect(() => {
        const div = divRef.current;
        div.addEventListener('wheel', handleWheel, { passive: false });
        return (() => {
            div.removeEventListener('wheel', handleWheel);
        });
    });

    return (
        <div ref={divRef} className="box"
             onWheel={handleWheel}
            >
            예를 들어 Wheel 이벤트를 핸들러에서...
        </div>
    );
}