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
import TypeProp from "./TypeProp.jsx";

createRoot(document.getElementById('root')).render(
    <TypeProp prop1={new Member()} />
);

