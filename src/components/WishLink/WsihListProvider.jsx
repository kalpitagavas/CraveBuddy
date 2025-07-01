import { useContext, createContext, useState } from 'react';

const WishListContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishList = (item) => {
    setWishlistItems((prev) => {
      const alreadyInList = prev.some((i) => i.id === item.id);
      return alreadyInList ? prev : [...prev, item];
    });
  };

  const removeFromWishList = (index) => {
    const newWishList = [...wishlistItems];
    newWishList.splice(index, 1);
    setWishlistItems(newWishList);
  };

  return (
    <WishListContext.Provider value={{ wishlistItems, removeFromWishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
}

export function useWishList() {
  return useContext(WishListContext);
}
