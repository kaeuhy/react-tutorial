import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import books from './books'
import ForFilter from "./ForFilter"
import SelectStyle from './SelectStyle';

createRoot(document.getElementById('root')).render(
    <SelectStyle src={books} />
);

