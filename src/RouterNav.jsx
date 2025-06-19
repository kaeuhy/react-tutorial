import {NavLink, Outlet} from "react-router-dom";

const isCurrent = ({ isActive }) => isActive ? {
    color: 'Red;,
    fontWeight: 'bold'
} : {};


export default function RouterNav() {
    return (
        <>
            <ul>
                <li><NavLink className={isCurrent} to="/">홈</NavLink></li>
                <li><NavLink className={isCurrent} to="/article">기사</NavLink></li>
                <li><NavLink className={isCurrent} to="/about">회사 소개</NavLink></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}