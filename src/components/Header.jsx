import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">E-Commerce</h1>
      <nav>
        <Link to="/" className="px-4">Home</Link>
        <Link to="/cart" className="px-4">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
