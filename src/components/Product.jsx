import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <h2 className="text-lg font-bold my-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 mt-2 inline-block rounded">
        View Details
      </Link>
    </div>
  );
};

export default Product;
