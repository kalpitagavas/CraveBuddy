import React, { useEffect } from "react";

import { useContext, useState, createContext } from "react";

//global box creation
const cartContext = createContext();
export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
});
  const [isOpen, setIsOpen] = useState(false); // for cart drawer


  useEffect(()=>{
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  },[cartItems])
  function addToCart(item) {(cartItems)
    setCartItems((prev) => {
      const alreadyInList = prev.some((i) => i.id === item.id);
      return alreadyInList ? prev : [...prev, item];
    });
  }
  function removeFromCart(index) {
    const newitem = [...cartItems];
    newitem.splice(index, 1);
    setCartItems(newitem);
  }
  function toggleCart() {
    setIsOpen(!isOpen);
  }
  return (
    <cartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isOpen, toggleCart }}
    >
      {children}
    </cartContext.Provider>
  );
}
export function useCart() {
  return useContext(cartContext);
}
