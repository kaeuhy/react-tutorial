import { useMemo, useCallback, useState } from 'react';
import { MyButton, MyCounter } from './HookMemoChild';

// 인자 delay만 처리를 일시 정지하는 코드
const sleep = delay => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HookMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // MyButton에 넘겨주는 핸들러
  const increment = () => setCount1(c => c + 1);
  const decrement = () => setCount2(c => c - 1);

  // count1에 100을 더한 값을 계산하는 코드 (더미 헤비 처리)
  const heavyProcess = useMemo(() => {
    sleep(1000);
    return count1 + 100;
  }, [count1]);

  return (
    <>
      {/* 값을 1씩 증가시키는 카운터 */}
      <div>
      <MyButton id="btn1" handleClick={increment}>카운트업</MyButton>
      <MyCounter id="c1" value={count1} />／
      {heavyProcess}
      </div>
      <div>
      {/* 값을 1씩 감소시키는 카운터 */}
      <MyButton id="btn2" handleClick={decrement}>카운트다운</MyButton>
      <MyCounter id="c2" value={count2} />
      </div>
    </>
  );
}