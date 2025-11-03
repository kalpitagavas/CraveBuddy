import React, { useState, useEffect } from 'react';
import allProducts from './data/products'; // Renamed to avoid confusion
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton'; // <-- Import the skeleton
import { FaThLarge, FaBars } from 'react-icons/fa';

const Products = () => {
  const [view, setView] = useState('grid');
  const [products, setProducts] = useState([]); // <-- Start with empty products
  const [isLoading, setIsLoading] = useState(true); 

  // Simulate fetching data when the component mounts
  useEffect(() => {
    // Set loading to true initially
    setIsLoading(true);

    // Simulate a 2-second network delay
    const timer = setTimeout(() => {
      setProducts(allProducts); // Load the actual products
      setIsLoading(false); // Set loading to false
    }, 2000); // 2 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array [] means this effect runs only once

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 px-4 flex flex-col lg:flex-row gap-6">
      {/* Main content */}
      <div className="w-full lg:w-[70%]">
        {/* Toggle Buttons */}
        <div className="flex justify-end mb-4 gap-2">
          {/* ... (your button code remains the same) ... */}
           <button
             onClick={() => setView('grid')}
             className={`p-2 rounded border ${view === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-700'} hover:bg-black hover:text-white transition`}
           >
             <FaThLarge />
           </button>
           <button
             onClick={() => setView('list')}
             className={`p-2 rounded border ${view === 'list' ? 'bg-black text-white' : 'bg-white text-gray-700'} hover:bg-black hover:text-white transition`}
           >
             <FaBars />
           </button>
        </div>

        {/* Product Display: Conditionally render skeletons or products */}
        <div
          className={`${
            view === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'
              : 'flex flex-col gap-4'
          }`}
        >
          {isLoading
            ? // If loading, show 10 skeleton cards
              [...Array(10)].map((_, index) => (
                <ProductCardSkeleton key={index} layout={view} />
              ))
            : // If not loading, show the actual product cards
              products.map(product => (
                <ProductCard key={product.id} product={product} layout={view} />
              ))}
        </div>
      </div>

    {/* Sidebar */}
      <div className="w-full lg:w-[30%] bg-gray-100 rounded-md p-4 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Sponsored</h2>

        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">🔥 Summer Sale - 50% Off!</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">💡 Try our new skincare line</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">📦 Free shipping on orders over ₹999</p>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">Ads</h2>

        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">🧴 Shop wellness essentials</p>
        </div>
        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">📦 Free shipping over ₹999</p>
        </div>
      </div>
    </div>
  );
};
export default Products;