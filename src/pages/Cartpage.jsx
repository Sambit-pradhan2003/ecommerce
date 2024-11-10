import React from 'react';
import Cart from '../components/Cart';

const dummyCartItems = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
];

const CartPage = () => {
  return (
    <div className="p-4">
      <Cart cartItems={dummyCartItems} />
    </div>
  );
};

export default CartPage;
