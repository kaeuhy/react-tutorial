import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import routesParam from "./routesParam.jsx";
import {Helmet, HelmetProvider} from "react-helmet-async";
import routesHandle from "./routesHandle.jsx";

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <RouterProvider router={routesHandle} />
    </HelmetProvider>
);