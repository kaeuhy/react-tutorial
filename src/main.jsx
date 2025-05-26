import {createRoot} from 'react-dom/client'
import './global.css'
import HookCallbackRef from "./HookCallbackRef.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookCallbackRef />
        </div>
    </>
);

