import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForFilter from "./ForFilter"
import SelectStyle from './SelectStyle';
import {Form} from "./Form.jsx";
import StyledPanel from "./StyledPanel.jsx";
import TitledPanel from "./TitledPanel.jsx";

createRoot(document.getElementById('root')).render(
    <TitledPanel>
        <p key="title">회원 모집 중!</p>
        <p key="body">위키북스 프로젝트에 오신 것을 환영합니다!</p>
    </TitledPanel>
);

