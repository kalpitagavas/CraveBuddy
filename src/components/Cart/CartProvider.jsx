import React from "react";

import { useContext, useState, createContext } from "react";

//global box creation
const cartContext = createContext();
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // for cart drawer

  function addToCart(item) {
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
