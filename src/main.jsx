import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GymApp } from './GymApp'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GymApp/>
    </BrowserRouter>
  </StrictMode>,
)
