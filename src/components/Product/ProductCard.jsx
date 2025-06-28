import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <motion.div
      className="relative max-w-xs bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg transition duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button className="text-gray-500 hover:text-red-500 transition">
          <FaHeart />
        </button>
      </div>

      {/* Product Image */}
      <motion.img
        src={product.image}
        alt={product.name || 'Product image'}
        className="w-full h-60 object-cover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 400 }}
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h2 className="text-base font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-xs">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-gray-800">
            ₹{product.price}
          </span>
          <button className="flex items-center gap-1 bg-secondary text-white text-xs px-3 py-1.5 rounded hover:bg--700 transition">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
