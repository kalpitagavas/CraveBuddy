import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          <div>
            <div>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
