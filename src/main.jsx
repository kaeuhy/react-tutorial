import {createRoot} from 'react-dom/client'
import HookCustom from "./HookCustom.jsx";
import NetworkHook from "./NetworkHook.jsx";
import {Route, RouterProvider} from "react-router-dom";
import routesBasic from "./routesBasic.jsx";
import TopPage from "./TopPage.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";
import routesLink from "./routesLink.jsx";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routesLink} />
);