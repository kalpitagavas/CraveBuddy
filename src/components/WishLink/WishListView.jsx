import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWishList } from "./WsihListProvider";
import { useCart } from "../Cart/CartProvider";
import WishListCardSkeleton from "./WishListCardSkeleton.JSX";
import { ShoppingCart, Trash2 } from "lucide-react";

const WishListView = () => {
  const { wishlistItems, removeFromWishList } = useWishList();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(null); // for add animation

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (item, index) => {
    setClickedIndex(index);
    addToCart(item);
    setTimeout(() => setClickedIndex(null), 500); // reset after animation
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-28">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">
        Your Wishlist
      </h2>

      {isLoading ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <WishListCardSkeleton key={index} />
          ))}
        </ul>
      ) : wishlistItems.length === 0 ? (
        <p className="text-gray-600 text-center text-lg mt-10">
          Your wishlist is empty 😢
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {wishlistItems.map((item, index) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-[420px]"
              >
                {/* Image Section */}
                <div className="relative group h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/80 text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {item.description || "Delicious and freshly prepared!"}
                    </p>
                    {item.category && (
                      <span className="text-xs bg-amber-600 px-3 py-1 rounded-full mt-2 inline-block">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col flex-grow p-5">
                  <p className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-5 mt-1">
                    ₹{item.price}
                  </p>

                  {/* Buttons with animation */}
                  <div className="mt-auto flex items-center justify-center gap-4">
                    <motion.button
                      onClick={() => handleAddToCart(item, index)}
                      title="Add to Cart"
                      whileTap={{ scale: 0.8 }}
                      animate={
                        clickedIndex === index
                          ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                      className="bg-amber-900 hover:bg-amber-800 text-white p-3 rounded-full transition-all"
                    >
                      <ShoppingCart size={20} />
                    </motion.button>

                    <motion.button
                      onClick={() => removeFromWishList(index)}
                      title="Remove from Wishlist"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default WishListView;
