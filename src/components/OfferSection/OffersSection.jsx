// components/OffersSection.jsx
import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Get 20% OFF",
    description: "On your first order above ₹299",
    code: "WELCOME20",
  },
  {
    title: "Free Delivery",
    description: "On orders above ₹499",
    code: "FREESHIP",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "Valid on select desserts",
    code: "BOGO",
  },
];

const OffersSection = () => {
  return (
    <motion.div
      className="bg-secondary/20 py-10 px-4 md:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-8">🔥 Exciting Offers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer, idx) => (
          <div
  key={idx}
  className="relative bg-white p-6  py-12 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
>
 <h3 className="absolute -top-5 left-1/2 transform -translate-x-1/2 font-semibold w-20 h-20 rounded-full flex items-center justify-center text-center text-xs text-white shadow-md bg-secondary px-2 leading-tight">
  {offer.title}
</h3>
         <p className="text-gray-700 mt-4">{offer.description}</p>
            <div className="mt-4 text-sm font-mono bg-primary text-white px-3 py-1 rounded inline-block">
              Use Code: {offer.code}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OffersSection;
