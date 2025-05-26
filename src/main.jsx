import {createRoot} from 'react-dom/client'
import './global.css'
import HookCallbackRef from "./HookCallbackRef.jsx";
import HookReducer from "./HookReducer.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookReducer init={0}/>
        </div>
    </>
);

