import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProduct = { id: 1, name: 'Product 1', price: 10, description: 'This is a sample product.', image: 'https://via.placeholder.com/150' };

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProduct;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-2xl font-bold my-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="my-4">{product.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
