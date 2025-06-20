import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import routesParam from "./routesParam.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routesParam} />
);