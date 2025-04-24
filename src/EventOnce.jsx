import { useState } from 'react';

export default function EventOnce() {
    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState('-');
    const handleClick = e => {
        if (!clicked) {
            setResult(Math.floor(Math.random() * 100 + 1));
            setClicked(true);
        }
    };

    return (
        <>
        <button onClick={handleClick}>결과 보기</button>
            <p>오늘의 운세는 {result}점입니다.</p>
        </>
    );
}