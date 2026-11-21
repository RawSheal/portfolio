import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import SpotlightWrapper from './SpotlightWrapper'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpotlightWrapper>
      <Home />
    </SpotlightWrapper>
  </StrictMode>,
)
