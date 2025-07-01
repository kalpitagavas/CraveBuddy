import React from "react";
import { useCart } from "./CartProvider";
import { DeleteIcon } from "lucide-react";

const CartDrawer = () => {
  const { cartItems, removeFromCart, isOpen, toggleCart } = useCart();

  return (
    <div
      className={`fixed top-12 right-0 w-80 h-auto bg-white shadow-lg p-4 transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-red-500 font-semibold text-lg"
        >
          X
        </button>
      </div>

      {cartItems.length === 0 && (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 items-center bg-gray-100 p-3 rounded-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="text-red-600 hover:text-red-800"
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrawer;
