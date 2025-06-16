import {createRoot} from 'react-dom/client'
import './global.css'
import HookTransition from "./HookTransition.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookTransition />
        </div>
    </>
);