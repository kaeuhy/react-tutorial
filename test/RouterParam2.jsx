import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../src/RouterNav.css';

export default function RouterParam2() {
  // 카운트 수를 관리하기 위한 State를 준비한다.
  const [count, setCount] = useState(0);

  return (
    <>
      <p>접속자 수:{count}</p>
      <ul>
        <li><NavLink to="/weather/Seoul">서울 날씨</NavLink></li>
      </ul>
      <hr />
      {/* 컨텍스트에 count/setCount를 삽입 */}
      <Outlet context={[count, setCount]} />
    </>
  );
}