import {createRoot} from 'react-dom/client'
import './global.css'
import HookTransition from "./HookTransition.jsx";
import HookDefered from "./HookDeferred.jsx";
import HookDeferredTransition from "./HookDeferredTransition.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookDeferredTransition/>
        </div>
    </>
);