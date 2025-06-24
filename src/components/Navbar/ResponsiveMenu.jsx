import React from "react";
import { motion,AnimatePresence, easeIn, easeInOut } from "framer-motion";
import { RxOpacity } from "react-icons/rx";
const menuVarient={
  hidden: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: "easeInOut" },
    box: { duration: 0.3, ease: "easeInOut" }
  },
visible:{
  opacity:1,
  y:0,
  transition:{duration:0.3,ease:"easeOut"}
},
exit:{
  opacity:0,
  y:-50,
  transition: { duration: 0.3, ease: "easeIn" }
}
}
const ResponsiveMenu = ({ open }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          
            <motion.div  className="absolute top-20 left-0 w-full h-screen z-20" initial="hidden" animate="visible" exit="exit" variants={menuVarient}>
            <div className="text-2xl bg-primary text-white uppercase font-semibold py-4 m-6 rounded-3xl">
              <ul className="flex flex-col items-center gap-10">
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
