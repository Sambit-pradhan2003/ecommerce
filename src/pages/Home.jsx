import React from 'react';
import ProductList from '../components/ProductList';

const dummyProducts = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 15, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 20, image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <ProductList products={dummyProducts} />
    </div>
  );
};

export default Home;
