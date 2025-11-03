import React from "react";

const ProductCardSkeleton = ({ layout = "grid" }) => {
  const isList = layout === "list";

  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm ${
        isList ? "flex items-start gap-6 p-4" : "flex flex-col"
      }`}
    >
      {/* The animate-pulse class does all the magic! */}
      <div className="animate-pulse w-full">
        {/* Image Skeleton */}
        <div
          className={`bg-gray-300 rounded-md ${
            isList ? "w-32 h-32" : "w-full h-48"
          }`}
        ></div>

        {/* Info Section Skeleton */}
        <div className={`flex flex-col justify-between ${isList ? "flex-1" : "p-4"}`}>
          <div>
            {/* Product Name Skeleton */}
            <div className="h-5 bg-gray-300 rounded w-3/4 mt-2"></div>
            {/* Product Description Skeleton */}
            <div className="h-4 bg-gray-300 rounded w-full mt-3"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
            {/* Stars Skeleton */}
             <div className="h-4 bg-gray-300 rounded w-1/4 mt-3"></div>
          </div>

          {/* Price and Cart Skeleton */}
          <div className="mt-4 flex justify-between items-center">
            {/* Price Skeleton */}
            <div className="h-7 bg-gray-300 rounded w-1/3"></div>
            {/* Button Skeleton */}
            <div className="h-10 bg-gray-300 rounded-full w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;