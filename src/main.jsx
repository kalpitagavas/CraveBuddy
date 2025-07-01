import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './components/Cart/CartProvider.jsx'
import { WishlistProvider } from './components/WishLink/WsihListProvider.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
  <BrowserRouter>
  <CartProvider>
      <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
</BrowserRouter>
  </StrictMode>,


)
