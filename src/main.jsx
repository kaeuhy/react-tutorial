import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
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
import StateNest from "./StateNest.jsx";
import StateNestImmer2 from "./StateNestImmer2.jsx";
import StateTodo from "./StateTodo.jsx";
import StateNestImmer from "./StateNestImmer.jsx";
import FormBasic from "./FormBasic.jsx";
import FormYup from "./FormYup.jsx";
import LazyBasic from "./LazyBasic.jsx";
import SuspenseResult from "./SuspenseResult.jsx";
import ProfilerBasic from "./ProfilerBasic.jsx";
import NestingSuspense from "./NestingSuspense.jsx";
import StyledBasic from "./StyledBasic.jsx";
import StyledGlobalBasic from "./StyledGlobalBasic.jsx";
import StyledCss from "./StyledCss.jsx";
import StyledDynamic from "./StyledDynamic.jsx";
import StyledComp from "./StyledComp.jsx";
import {MyButton, MyStyledButton} from "./StyledComp2.jsx";
import StyledCommon from "./StyledCommon.jsx";
import StyledProps from "./StyledProps.jsx";
import EmotionComp from "./EmotionComp.jsx";
import EmotionJsx from "./EmotionJsx.jsx";
import { css, Global } from '@emotion/react';
import PortalBasic from "./PortalBasic.jsx";
import ErrorRoot from "./ErrorRoot.jsx";
import ErrorRetryRoot from "./ErrorRetryRoot.jsx";
import ErrorEventRoot from "./ErrorEventRoot.jsx";

createRoot(document.getElementById('root')).render(
    <div className="centered">
        <ErrorEventRoot />
    </div>
);

