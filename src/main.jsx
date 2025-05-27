import {createRoot} from 'react-dom/client'
import './global.css'
import HookCallbackRef from "./HookCallbackRef.jsx";
import HookReducer from "./HookReducer.jsx";
import HookReducerUp from "./HookReducerUp.jsx";
import HookReducerInit from "./HookReducerInit.jsx";
import HookContext from "./HookContext.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookContext />
        </div>
    </>
);

