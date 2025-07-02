import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../Cart/CartProvider";
import { useWishList } from "../WishLink/WsihListProvider";

const ProductCard = ({ product, layout = "grid" }) => {
  const { addToCart, toggleCart, isOpen } = useCart();
  const { addToWishList } = useWishList();
  if (!product) return <div>Loading...</div>;

  const isList = layout === "list";

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 shadow-sm hover:shadow-md ${
        isList ? "flex items-start gap-6 p-4" : "flex flex-col"
      }`}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Wishlist Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => addToWishList(product)}
        className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500"
      >
        <FaHeart size={18} />
      </motion.button>

      {/* Image Section */}
      <div className={`${isList ? "" : "w-full"} relative`}>
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`object-cover rounded-md ${
            isList ? "w-32 h-32" : "w-full h-48"
          }`}
        />
      </div>

      {/* Info Section */}
      <div
        className={`flex flex-col justify-between ${isList ? "flex-1" : "p-4"}`}
      >
        <div>
          <h3 className="text-base font-semibold text-gray-900 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center gap-1 text-yellow-400 mt-2 text-xs">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Price and Cart */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-base font-bold text-gray-800">
            ₹{product.price}
          </span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              addToCart(product);
              if (!isOpen) toggleCart();
            }}
            className="flex items-center gap-2 bg-secondary hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-full transition"
          >
            <FaShoppingCart />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
