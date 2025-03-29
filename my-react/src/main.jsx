import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForFilter from "./ForFilter"
import SelectStyle from './SelectStyle';
import {Form} from "./Form.jsx";
import StyledPanel from "./StyledPanel.jsx";
import TitledPanel from "./TitledPanel.jsx";
import ListTemplate from "./ListTemplate";
import MyHello from "./MyHello.jsx";
import TypeProp, {Member} from "./TypeProp.jsx";
import StateBasic from "./StateBasic.jsx";
import StateParent from "./StateParent.jsx";
import EventMouse from "./EventMouse.jsx";

createRoot(document.getElementById('root')).render(
    <EventMouse
    alt="로고 이미지"
    beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
    afterSrc="https://www.web-deli.com/image/home_chara.gif" />
);

