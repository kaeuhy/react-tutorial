import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForNest from "./ForNest"

createRoot(document.getElementById('root')).render(
    <ForNest src={books} />
);

