import {createRoot} from 'react-dom/client'
import './global.css'
import HookCustom from "./HookCustom.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <HookCustom />
        </div>
    </>
);