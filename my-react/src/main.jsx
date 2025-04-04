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
import StateBasic from "./StateBasic";
import StateParent from "./StateParent.jsx";
import EventMouse from "./EventMouse.jsx";
import EventCompare from "./EventCompare.jsx";
import EventError from "./EventError.jsx";
import EventObj from "./EventObj.jsx";
import EventPoint from "./EventPoint.jsx";
import EventKey from "./EventKey.jsx";
import EventArgs from "./EventArgs.jsx";
import EventArgs2 from "./EventArgs2.jsx";
import EventPropagation from "./EventPropagation.jsx";
import EventOnce from "./EventOnce.jsx";
import EventPassive from "./EventPassive.jsx";
import StateForm from "./StateForm.jsx";
import StateFormUC from "./StateFormUC.jsx";
import FormTextarea from "./FormTextarea.jsx";
import FormSelect from "./FormSelect.jsx";
import FormList from "./FormList.jsx";
import FormRadio from "./FormRadio.jsx";
import FormCheck from "./FormCheck.jsx";
import FormCheckMulti from "./FormCheckMulti.jsx";
import FormFile from "./FormFile.jsx";

createRoot(document.getElementById('root')).render(
    <FormFile />
);

