import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqData = [
  {
    question: "What is your delivery time?",
    answer:
      "Delivery typically takes 30-45 minutes depending on your location.",
  },
  {
    question: "Do you offer contactless delivery?",
    answer: "Yes, all our deliveries are 100% contactless for your safety.",
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! You can add notes and preferences during checkout.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="max-w-2xl mx-auto p-12 -mt-12"
    >
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center text-left"
          >
            <h3 className="text-lg font-medium text-gray-800">
              {item.question}
            </h3>
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-600 mt-2 text-sm">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default Accordion;
