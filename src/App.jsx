import "./App.css";
import CartDrawer from "./components/Cart/CartDrawer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
       <CartDrawer /> 
    </main>
  );
}

export default App;
