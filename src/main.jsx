import {createRoot} from 'react-dom/client'
import './global.css'
import HookCustom from "./HookCustom.jsx";
import NetworkHook from "./NetworkHook.jsx";
import {Route, RouterProvider} from "react-router-dom";
import routesBasic from "./routesBasic.jsx";
import TopPage from "./TopPage.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </div>
    </>
);