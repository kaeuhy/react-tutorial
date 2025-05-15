import {createRoot} from 'react-dom/client'
import './global.css'
import PortalExample from "./PortalExample.jsx";
import NoPortalExample from "./NoPortalExample.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <div id="dialog"></div>
            <PortalExample/>
            <NoPortalExample/>
        </div>
    </>
);

