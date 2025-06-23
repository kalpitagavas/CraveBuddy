import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { TbChefHat } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <p className="relative text-primary font-bold text-2xl">
            <TbChefHat className="absolute -top-4 -left-2 text-2xl rotate-[-15deg] text-secondary" />
            Crave
          </p>
          <p className="text-secondary font-bold text-2xl">Buddy</p>
        </div>

        {/* Right side: Menu + Cart */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-primary transition-colors duration-300">Home</a>
            <a href="#">Product</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>

          <div className="text-2xl cursor-pointer ">
            <FaCartShopping />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
