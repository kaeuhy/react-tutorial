import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StateBasic from './StateBasic'

createRoot(document.getElementById('root')).render(
    <StateBasic init={0} />
);

