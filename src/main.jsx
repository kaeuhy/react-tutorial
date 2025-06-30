import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import routesScroll from "./routesScroll.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routesScroll} />
);