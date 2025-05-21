import {createRoot} from 'react-dom/client'
import './global.css'
import PortalExample from "./PortalExample.jsx";
import NoPortalExample from "./NoPortalExample.jsx";
import StateEffect from "./StateEffect.jsx";
import HookTimer from "./HookTimer.jsx";
import HookEffect from "./HookEffect.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookEffect init={10} />
        </div>
    </>
);

