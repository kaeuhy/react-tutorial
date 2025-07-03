import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import routesParam2 from "./routesParam2.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routesParam2} />
);