import {createRoot} from 'react-dom/client'
import './global.css'
import PortalExample from "./PortalExample.jsx";
import NoPortalExample from "./NoPortalExample.jsx";
import StateEffect from "./StateEffect.jsx";
import HookTimer from "./HookTimer.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookTimer init={0} />
        </div>
    </>
);

