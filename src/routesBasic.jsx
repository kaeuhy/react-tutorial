import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import TopPage from './TopPage.jsx';
import ArticlePage from './ArticlePage.jsx';
import AboutPage from './AboutPage.jsx';

const routesBasic = createBrowserRouter([
    { path: '/', element: <TopPage /> },
    { path: '/article', element: <ArticlePage /> },
    { path: '/about', element: <AboutPage /> },
]);

export default routesBasic;