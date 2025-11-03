import "./App.css";
import CartDrawer from "./components/Cart/CartDrawer";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import WishListPage from "./pages/WishListPage";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <main className="overflow-x-hidden ">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products" element={<ProductPage />} />
         <Route path="/wishlist" element={<WishListPage />} /> 
         <Route path="/about" element={<About/>} /> 
         <Route path="/cart" element={<Cart/>} /> 
         <Route path='/checkout'element={<CheckoutPage/>}/>
        <Route path='/contact'element={<Contact/>}/>
          <Route path='/orderConfirmation'element={<OrderConfirmation/>}/>
      </Routes>
      <CartDrawer />
    </main>
  );
}

export default App;
