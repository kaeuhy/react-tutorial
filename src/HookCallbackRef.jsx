import { useEffect, useRef, useState } from "react";

export default function HookCallbackRef() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    // const address = useRef(null);
    const callbackRef = elem => elem?.focus();

    // useEffect(() => {
    //     if (address.current) {
    //         address.current.focus();
    //     }
    // }, [show]);

    return (
        <>
        <div>
            <label htmlFor="name">이름:</label>
            <input id="name" type="text" />
        </div>
            <div>
                <label htmlFor="email">이메일 주소:</label>
                <input id="email" type="text" />
                <button onClick={handleClick}>확장 표시</button>
            </div>
            {show &&
                <div>
                    <label htmlFor="address">주소:</label>
                <input id="address" type="text" ref={callbackRef} />
                </div>
            }
        </>
    );
}