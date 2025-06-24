import React from 'react'
import CardBurger from "../../assets/CardBurger.png";
import CardPizza from "../../assets/CartPizza.png";
import {motion} from "framer-motion"
const menuItems = [
  {
    name: "Spicy Chicken Burger",
    price: "₹149",
    description: "Juicy grilled chicken with spicy mayo and fresh lettuce.",
    image: CardBurger
  },
  {
    name: "Hot Pizza with cheese",
    price: "₹199",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
    image:  CardPizza
  },
  {
    name: "Loaded Nachos",
    price: "₹129",
    description: "Corn chips loaded with cheese, beans, and jalapeños.",
    image:  CardBurger
  },
 
  {
    name: "Chocolate Brownie",
    price: "₹89",
    description: "Fudgy chocolate brownie served warm with a drizzle of chocolate.",
    image:  CardBurger
  }
];

const Menus = () => {

  return (
   <div className="grid gap-20 p-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {menuItems.map((menu, index) => (
    <motion.div  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.07, y: -2 }}
  transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
 
      key={index}
      className="relative flex items-center shadow-lg rounded-xl px-6 py-4"
    >
      {/* Image that hangs halfway outside the card */}
      <img
        src={menu.image}
        alt={menu.name}
        className="absolute left-[-40px] h-32 w-34 object-cover rounded-xl"
      />

      {/* Content with padding so it doesn't overlap image */}
      <div className="pl-20">
        <h1 className="text-md font-bold font-headline">{menu.name}</h1>
        <p className="text-sm text-gray-600 mt-1">{menu.description}</p>
        <p className="text-green-600 font-semibold mt-2">{menu.price}</p>
      </div>
    </motion.div>
  ))}
</div>

  )
}

export default Menus
