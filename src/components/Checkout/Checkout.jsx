import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems = [], totalItems = 0, totalPrice = 0 } = location.state || {};

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You could grab form inputs here, e.g.:
    // const formData = new FormData(e.target);
    // const address = formData.get("address");

    navigate("/orderConfirmation", {
      state: {
        orderId: "CB" + Math.floor(100000 + Math.random() * 900000),
        totalPrice,
        cartItems,
        address: "User's entered address", // replace with real input if you like
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-8 mt-28">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center md:text-left">
        Checkout
      </h1>

      <div className="md:flex md:space-x-10">
        {/* Order Summary */}
        <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3 text-gray-600 font-medium">
            <span>Total Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between mb-6 text-gray-600 font-medium text-lg">
            <span>Total Price:</span>
            <span className="text-secondary font-bold text-lg">₹{totalPrice}</span>
          </div>

          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <span className="text-gray-700">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-gray-800 font-semibold">
                  ₹{item.price * item.quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 mt-10 md:mt-0 bg-white p-8 rounded-xl shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-4">
            Billing Details
          </h2>

          <div className="grid grid-cols-1 gap-5">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Address</label>
              <textarea
                name="address"
                placeholder="123 Main Street, City, Country"
                required
                className="p-3 border border-gray-300 rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary transition mt-4"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
