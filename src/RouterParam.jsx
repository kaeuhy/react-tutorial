import { NavLink, Outlet } from 'react-router-dom';
import './RouterNav.css';

export default function RouterParam() {
  return (
    <>
      <ul>
        <li><NavLink to="/">홈</NavLink></li>
        <li><NavLink to="/book/979-1-1583-9517-9">
          시작하세요! C# 12 프로그래밍</NavLink></li>
        <li><NavLink to="/book/979-1-1583-9518-6">
          OpenAI API와 파이썬으로 나만의 챗GPT 만들기</NavLink></li>
        <li><NavLink to="/book" end>기본 도서</NavLink></li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
