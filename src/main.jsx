import {createRoot} from 'react-dom/client'
import './global.css'
import HookCustom from "./HookCustom.jsx";
import NetworkHook from "./NetworkHook.jsx";
import {RouterProvider} from "react-router-dom";
import routesBasic from "./routesBasic.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <RouterProvider router={routesBasic}/>
        </div>
    </>
);