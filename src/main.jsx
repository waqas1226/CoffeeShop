import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/HelpingFiles/CartContext.jsx'
import { UserProvider } from './components/HelpingFiles/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CartProvider>
      <UserProvider>
    <App />
      </UserProvider>
      </CartProvider>
  </StrictMode>,
)
