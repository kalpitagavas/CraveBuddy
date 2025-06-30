import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '../Cart/CartProvider';

const ProductCard = ({ product, layout = 'grid' }) => {
  const { addToCart, toggleCart } = useCart()
  if (!product) return <div>Loading...</div>;

  const isList = layout === 'list';

  return (
    <motion.div
      className={`relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow hover:shadow-lg transition duration-300 ${
        isList ? 'flex flex-col sm:flex-row h-auto' : ''
      }`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button className="text-gray-500 hover:text-red-500 transition">
          <FaHeart />
        </button>
      </div>

      {/* Product Image - 30% in list view */}
     <motion.img
  src={product.image}
  alt={product.name || 'Product image'}
  className={`object-cover ${
    isList
      ? 'w-full sm:w-[30%] h-80 sm:h-52'
      : 'w-full h-60'
  }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 400 }}
      />

      {/* Content - 70% in list view */}
      <div
        className={`p-4 space-y-2 flex flex-col justify-between ${
          isList ? 'w-full sm:w-[70%]' : ''
        }`}
      >
        <div>
          <h2 className="text-base font-semibold text-gray-800 truncate">
            {product.name}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-gray-800">
            ₹{product.price}
          </span>
          <button
  onClick={() => {
    addToCart(product);   
    toggleCart();         
  }}
  className="flex items-center gap-1 bg-secondary text-white text-xs px-3 py-1.5 rounded hover:bg-amber-700 transition"
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
