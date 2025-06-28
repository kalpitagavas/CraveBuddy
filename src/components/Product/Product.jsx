import React from 'react';
import products from './data/products';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="pt-40 px-4 flex flex-col lg:flex-row gap-6">
 
         
      {/* Product Grid - 70% */}
      <div className="w-full lg:w-[70%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Ad/Sidebar - 30% */}
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
          <p className="text-sm text-gray-600">💡 Try our new skincare line</p>
        </div>

        <div className="bg-white p-3 rounded shadow">
          <p className="text-sm text-gray-600">📦 Free shipping on orders over ₹999</p>
        </div>
      </div>


    </div>
  );
};

export default Products;
