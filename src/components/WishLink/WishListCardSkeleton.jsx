import React from "react";

const WishListCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="h-48 w-full bg-gray-300 rounded-lg mb-4"></div>

      {/* Product Name Placeholder */}
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>

      {/* Price Placeholder */}
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>

      {/* Add To Cart Button Placeholder */}
      <div className="h-10 bg-gray-300 rounded-md mb-2"></div>

      {/* Remove Button Placeholder */}
      <div className="h-10 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default WishListCardSkeleton;
