import {NavLink, Outlet} from "react-router-dom";
import './RouterNav.css';


export default function RouterNav() {
    return (
        <>
            <ul>
                <li><NavLink to="/">홈</NavLink></li>
                <li><NavLink to="/article">기사</NavLink></li>
                <li><NavLink to="/about">회사 소개</NavLink></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}