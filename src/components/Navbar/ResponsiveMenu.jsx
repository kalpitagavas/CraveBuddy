import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, y: -80, transition: { duration: 0.3, ease: "easeInOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -80, transition: { duration: 0.3, ease: "easeIn" } },
};

const ResponsiveMenu = ({ open, setOpen }) => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-amber-900/80 z-50 flex justify-center items-start pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-amber-500 via-orange-400 to-red-700 rounded-3xl shadow-2xl w-11/12 max-w-sm p-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-6 text-center text-lg font-semibold text-white">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="hover:scale-105 hover:text-secondary transition-all cursor-pointer py-2 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
