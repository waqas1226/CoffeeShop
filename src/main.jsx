import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/Helping Files/CartContext.jsx'
import { UserProvider } from './components/Helping Files/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CartProvider>
      <UserProvider>
    <App />
      </UserProvider>
      </CartProvider>
  </StrictMode>,
)
