import {createRoot} from 'react-dom/client'
import './global.css'
import HookCallbackRef from "./HookCallbackRef.jsx";
import HookReducer from "./HookReducer.jsx";
import HookReducerUp from "./HookReducerUp.jsx";
import HookReducerInit from "./HookReducerInit.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookReducerInit init={0}/>
        </div>
    </>
);

