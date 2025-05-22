import {createRoot} from 'react-dom/client'
import './global.css'
import PortalExample from "./PortalExample.jsx";
import NoPortalExample from "./NoPortalExample.jsx";
import StateEffect from "./StateEffect.jsx";
import HookTimer from "./HookTimer.jsx";
import HookEffect from "./HookEffect.jsx";
import HookRefNg from "./HookRefNg.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookRefNg />
        </div>
    </>
);

