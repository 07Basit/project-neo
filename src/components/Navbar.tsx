import React, { useState } from 'react';
import { Apple, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Apple className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Farm Export</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold">
              About Us
            </Link>
            <Link to="/products" className="px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold">
              Products
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ zIndex: 50 }}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
            style={{ zIndex: 40 }}
          />
        )}
      </div>
    </nav>
  );
}