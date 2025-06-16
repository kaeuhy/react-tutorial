import {createRoot} from 'react-dom/client'
import './global.css'
import HookTransition from "./HookTransition.jsx";
import HookDefered from "./HookDeferred.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookDefered />
        </div>
    </>
);