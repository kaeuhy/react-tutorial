import {createRoot} from 'react-dom/client'
import {Route, RouterProvider} from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";
import routesParam from "./routesParam.jsx";

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <RouterProvider router={routesParam} />
    </HelmetProvider>
);