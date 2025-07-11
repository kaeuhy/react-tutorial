import useCounter from './UseCounter.jsx';

export default function HookCustom() {
    const [state, handleUp, handleDown, handleReset] = useCounter(0, 1);
    return (
        <>
            <button onClick={handleUp}>카운트업</button>
            <button onClick={handleDown}>카운트다운</button>
            <button onClick={handleReset}>리셋</button>
            <p>{state.count}번 클릭됐습니다.</p>
        </>
    );
}