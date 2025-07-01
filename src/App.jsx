import "./App.css";
import CartDrawer from "./components/Cart/CartDrawer";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import WishListPage from "./pages/WishListPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <main className="overflow-x-hidden ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/wishlist" element={<WishListPage />} /> 
      </Routes>
      <CartDrawer />
    </main>
  );
}

export default App;
