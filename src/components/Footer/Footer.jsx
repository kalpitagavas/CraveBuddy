import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black text-2xl pl-16 py-16">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-700 mb-4">FoodExpress</h2>
          <p className="text-sm">
            Delivering delicious experiences across India with love and spice.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white bg-gray-">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Contact</h3>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@foodexpress.in</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-amber-700">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-amber-700">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-700">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-amber-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="text-center text-sm text-gray-500 mt-20 -ml-30 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} FoodExpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
