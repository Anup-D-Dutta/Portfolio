import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DotBackground from './components/DotBackground.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DotBackground/>
  </StrictMode>,
)
