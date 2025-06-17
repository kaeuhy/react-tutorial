import {createRoot} from 'react-dom/client'
import './global.css'
import HookCustom from "./HookCustom.jsx";
import NetworkHook from "./NetworkHook.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <NetworkHook />
        </div>
    </>
);