import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RouterApp from "./RouterApp.jsx";
import TopPage from "./TopPage.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";
import RouterNav from "./RouterNav.jsx";


const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterNav />}>
            <Route path="/" element={<TopPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    )
);

export default routesLink;