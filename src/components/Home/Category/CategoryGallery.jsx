import React from "react";
import { motion } from "framer-motion";

import BiryaniImg from "../../../assets/CartBiryani.jpg"
import NorthIndianImg from "../../../assets/NorthIndianImg.png";
import SouthIndianImg from "../../../assets/SouthIndianImg.png";
import ThaliImg from "../../../assets/ThaliImg.png";

import PizzaImg from "../../../assets/CartPizza.png";
import PunjabiImg from "../../../assets/IndiaSpecial.png";

import KababImg from "../../../assets/CartPizza.png";
import DessertImg from "../../../assets/DesertImg.png";

const categories = [
  { name: "North Indian", img: NorthIndianImg },
  { name: "South Indian", img: SouthIndianImg },
  { name: "Biryani", img: DessertImg },
  { name: "Thali", img: ThaliImg },
  { name: "Chaat", img: PizzaImg },
  { name: "Vada Pav", img: DessertImg },
  { name: "Sweets", img: KababImg },
  { name: "Kulfi", img: DessertImg },
  { name: "Biryani", img: SouthIndianImg },
  
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const CategoryGallery = () => {
  const rows = [];
  for (let i = 0; i < categories.length; i += 10) {
    rows.push(categories.slice(i, i + 10));
  }

  return (
    <div>
      <h1 className="p-2  font-semibold text-2xl pl-20">What's on your mind?</h1>
      <motion.div
        className="space-y-10 px-6 py-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
            {row.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto ">
                  <motion.img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{category.name}</p>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryGallery;
