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

createRoot(document.getElementById('root')).render(
    <ListTemplate src={books}>
        { elem => (
            <>
            <dt>
                <a href={`https://wikibook.co.kr/images/cover/s/${elem.isbn}.jpg`}>
                    {elem.title} ({elem.price}원)
                </a>
            </dt>
                <dd>{elem.summary}</dd>
            </>
        )}
    </ListTemplate>
);

