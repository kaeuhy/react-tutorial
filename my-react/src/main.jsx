import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventBasic from './EventBasic'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <EventBasic type={"time"} />
  </StrictMode>,
)

