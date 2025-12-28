import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Portifolio from './components/portifolio/portifolio.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portifolio />
    
  </StrictMode>,
)
