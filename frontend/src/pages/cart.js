import React, { useEffect, useState } from 'react';
import './cart.css';
import { useCart } from './cartcontext'; // Import useCart hook from cartcontext

function Cart() {
  const { cartItems, removeFromCart } = useCart(); // Destructure removeFromCart from useCart hook
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    console.log('Cart component rendered with items:', cartItems);
    // Calculate total amount whenever cartItems changes
    const amount = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalAmount(amount);
  }, [cartItems]);

  const handleRemoveItem = (id, price) => {
    removeFromCart(id); // Call removeFromCart with the item id
    setTotalAmount(totalAmount - price);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <h3>Items in Cart</h3>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className="cart-item">
            <button className="item-remove" onClick={() => handleRemoveItem(cartItem.id, cartItem.price)}>-</button>
            <span className="item-name">{cartItem.name}</span>
            <span className="item-price">${cartItem.price.toFixed(2)}</span>
          </div>
        ))}
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Cart;
