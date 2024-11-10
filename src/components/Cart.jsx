import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="border-b py-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
