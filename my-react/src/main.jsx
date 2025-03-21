import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForList from "./ForList.jsx";

createRoot(document.getElementById('root')).render(
    <ForList src={books} />
);

