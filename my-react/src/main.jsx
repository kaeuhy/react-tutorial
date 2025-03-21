import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForFilter from "./ForFilter"

createRoot(document.getElementById('root')).render(
    <ForFilter src={books} />
);

