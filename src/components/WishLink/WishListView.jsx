import React from 'react';
import { useWishList } from './WsihListProvider';

const WishListView = () => {
  const { wishlistItems, removeFromWishList } = useWishList();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-32">
      <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your Wishlist is Empty</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item, index) => (
            <li key={item.id} className="bg-white shadow-md rounded-xl p-4 flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <p className="font-semibold text-lg text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600 mt-1 mb-4">₹{item.price}</p>
              <button
                onClick={() => removeFromWishList(index)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishListView;
