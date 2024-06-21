import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const hardcodedItems = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 15.99 },
    { id: 3, name: 'Item 3', price: 8.49 },
  ];

  const [cartItems, setCartItems] = useState([...hardcodedItems]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    updateCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Export removeFromCart directly
export const removeFromCart = (context, id) => {
  const { cartItems, updateCartItems } = context;
  const updatedCartItems = cartItems.filter(item => item.id !== id);
  updateCartItems(updatedCartItems);
};