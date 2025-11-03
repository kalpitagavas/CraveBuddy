import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home, Truck, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const order = {
    id: "CB123456",
    address: "123, Green Street, Bangalore, India",
    total: 689,
    items: [
      { name: "Paneer Butter Masala", qty: 1, price: 189 },
      { name: "Veg Thali", qty: 1, price: 149 },
      { name: "Butter Naan", qty: 2, price: 351 },
    ],
    eta: "30–40 minutes",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full"
      >
        <div className="text-center">
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
          <h1 className="text-2xl font-bold mt-4">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for ordering from <span className="font-semibold">Crave Buddy</span> 🍽️
          </p>
        </div>

        <div className="mt-6 border-t pt-4 text-gray-700">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Delivery Address:</strong> {order.address}</p>
          <p><strong>Estimated Delivery:</strong> {order.eta}</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
          <ul className="divide-y">
            {order.items.map((item, i) => (
              <li key={i} className="flex justify-between py-2">
                <span>{item.name} × {item.qty}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            <Home className="w-4 h-4" /> Home
          </button>

          <button
            onClick={() => navigate("/track-order")}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100"
          >
            <Truck className="w-4 h-4" /> Track Order
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100"
          >
            <FileText className="w-4 h-4" /> View Orders
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;
