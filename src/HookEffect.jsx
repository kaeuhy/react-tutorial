import { useEffect, useLayoutEffect, useState } from "react";

const sleep = delay => {
    const start = Date.now();
    while (true) {
        if (Date.now() - start > delay) { break; }
    }
};

export default function HookEffect({ init }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    const handleClick = () => {
        setCount(c => c + 1);
    };

    return (
        <>
            <button onClick={handleClick}>카운트</button>
            <p>{count}번 클릭되었습니다.</p>
        </>
    );
}