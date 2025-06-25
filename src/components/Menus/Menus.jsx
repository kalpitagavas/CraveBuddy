import React from "react";
import CartBurger from "../../assets/CartBurger.png";
import CartPizza from "../../assets/CartPizza.png";
import CartBiryani from "../../assets/CartBiryani.png";
import CartIce from "../../assets/CartIce.png";

import { motion } from "framer-motion";
const menuItems = [
  {
    name: "Spicy Chicken Burger",
    price: "₹149",
    description: "Juicy grilled chicken with spicy mayo and fresh lettuce.",
    image: CartBurger,
  },
  {
    name: "Hot Pizza with cheese",
    price: "₹199",
    description:
      "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    image: CartPizza,
  },
  // {
  //   name: "Chicken Biryani",
  //   price: "₹129",
  //   description: "Corn chips loaded with cheese, beans, and jalapeños.",
  //   image: CartBiryani,
  // },

  {
    name: "Chocolate Brownie",
    price: "₹189",
    description:
      "Fudgy chocolate brownie served warm with a drizzle of chocolate.",
    image: CartIce,
  },
];

const Menus = () => {
  return (
    <div className="grid gap-20 p-16 -mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {menuItems.map((menu, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.07, y: -2 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
          key={index}
          className="relative flex items-center shadow-lg rounded-xl px-6 py-4"
        >
          {/* Image that hangs halfway outside the card */}
          <img
            src={menu.image}
            alt={menu.name}
            className="absolute left-[-40px] h-32 w-34 object-cover rounded-xl  text-shadow-transparent"
          />

          {/* Content with padding so it doesn't overlap image */}
          <div className="pl-20 ">
            <h1 className="text-md font-bold font-headline">{menu.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
            <div className="flex justify-end pr-5">
              <p
                className="text-secondary hover:text-white hover:bg-amber-600 
    bg-amber-100 rounded-2xl w-20 h-10 font-semibold 
    flex items-center justify-center text-sm transition-all duration-200"
              >
                {menu.price}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Menus;
