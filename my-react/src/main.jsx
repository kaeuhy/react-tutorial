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
import EventCompare from "./EventCompare.jsx";
import EventError from "./EventError.jsx";
import EventObj from "./EventObj.jsx";
import EventPoint from "./EventPoint.jsx";
import EventKey from "./EventKey.jsx";

createRoot(document.getElementById('root')).render(
    <EventKey />
);

