import React, { useState } from "react";
import { useCart } from "./CartProvider";
import { DeleteIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Store quantities per item
  const [quantities, setQuantities] = useState(cartItems.map(() => 1));

  // Increment item quantity
  const incrementQty = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  // Decrement item quantity
  const decrementQty = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  // Total price calculation
  const totalPrice = cartItems.reduce(
    (acc, item, index) => acc + item.price * quantities[index],
    0
  );

  // Total items in cart (sum of quantities)
  const totalItems = quantities.reduce((acc, qty) => acc + qty, 0);

  // Navigate to Checkout with data
  const proceedToCheckout = () => {
    navigate("/checkout", {
      state: {
        cartItems: cartItems.map((item, index) => ({
          ...item,
          quantity: quantities[index],
        })),
        totalItems,
        totalPrice,
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-14">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
          <Link to="/">Redirect to Home</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white shadow rounded"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">
                    ₹{item.price * quantities[index]}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <DeleteIcon />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementQty(index)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{quantities[index]}</span>
                  <button
                    onClick={() => incrementQty(index)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-amber-900 p-6 rounded shadow-md h-fit">
            <h2 className="text-amber-50 text-xl font-bold mb-4">
              Order Summary
            </h2>
            <p className="flex justify-between mb-2">
              <span className="text-amber-50">Items:</span>{" "}
              <span className="text-amber-50">{totalItems}</span>
            </p>
            <p className="flex justify-between font-semibold text-lg mb-4">
              <span className="text-amber-50">Total:</span>{" "}
              <span className="text-amber-50">₹{totalPrice}</span>
            </p>
            <button
              onClick={proceedToCheckout}
              className="w-full bg-amber-100 text-black font-bold py-2 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
