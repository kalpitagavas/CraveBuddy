import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { TbChefHat, TbMenu, TbMenu2 } from "react-icons/tb";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Product", link: "/products" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contact", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    // Listen to resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow z-50">
        
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-md">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-primary text-white text-center py-3 px-4 text-sm md:text-base font-medium shadow-md"
          >
               🎁 Just scroll down to grab the best offers! Use coupon codes & enjoy discounts.
           </motion.div>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-1">
              <p className="relative text-primary font-bold text-3xl">
                <TbChefHat className="absolute -top-4 -left-3 text-3xl rotate-[-15deg] text-secondary" />
                Crave
              </p>
              <p className="text-secondary font-bold text-3xl">Buddy</p>
            </div>

            {/* Right side: Menu + Cart */}
            <div className="flex items-center gap-6">
              <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                {NavbarMenu.map((menu) => (
                  <li
                    key={menu.id}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <Link
                        to={menu.link}
                      className="inline-block px3 py-1 hover:shadow[0_3px_0_-1px_#ef4444] font-semibold"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <button className="text-2xl cursor-pointer hover:bg-primary hover:text-white rounded-full  duration-200 pt-4 pl-4 pb-4 pr-4">
                <FaCartShopping />
              </button>
            </div>
            <div className="lg:hidden" onClick={() => setOpen(!open)}>
              <TbMenu2 className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>

      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
