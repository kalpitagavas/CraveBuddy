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
      className={`bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden cursor-pointer ${
        isList ? "flex gap-4" : ""
      }`}
      whileHover={{ translateY: -6, boxShadow: "0 12px 20px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={() => {
            addToWishList(product);
          }}
          className="text-gray-500 hover:text-red-500 transition"
        >
          <FaHeart />
        </button>
      </div>
      <motion.img
        src={product.image}
        alt={product.name}
        className={`${
          isList
            ? "w-40 h-40 object-cover rounded-l-lg"
            : "w-full h-56 object-cover rounded-t-lg"
        }`}
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div
        className={`p-4 flex flex-col justify-between ${
          isList ? "flex-1" : ""
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-1 text-yellow-500 mt-2 text-xs">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-base font-semibold text-gray-800">
            ₹{product.price}
          </span>
          <button
            onClick={() => {
              addToCart(product);
              if (!isOpen) toggleCart();
            }}
            className="flex items-center gap-2 bg-secondary text-white text-sm px-4 py-2 rounded hover:bg-amber-700 transition"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
