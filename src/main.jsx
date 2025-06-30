import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import routesMyLink from "./routesMyLink.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routesMyLink} />
);