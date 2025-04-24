import { useState } from 'react';

export default function StateBasic({ init }) {
    const [count, setCount] = useState(init);
    console.log(`count is ${count}.`);
    /* [ 카운트 ] 버튼 클릭 시 카운트 값 증가 */
    let c = count;
    const handleClick = () => {
        setCount(c = c + 1);
        setCount(c = c + 1);
    }

    return (
        <>
        <button onClick={handleClick}>카운트</button>
        <p>{count}번 클릭했습니다.</p>
        </>
    )
}
