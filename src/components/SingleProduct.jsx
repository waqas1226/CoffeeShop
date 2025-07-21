import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router';
import { useCart } from './Helping Files/CartContext';

import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state?.prod;
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');

  const handleQuantityChange = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus' && quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    addToCart(product, quantity, selectedSize);
    console.log('Added to cart:', {
      product,
      quantity,
      selectedSize
    });
    // Redirect or show success message
  };

  if (!product) {
    return <div className="py-16 bg-black text-white text-center">Product not found</div>;
  }

  return (
    <>
    <Navbar/>
    <Carousel/>
    <section className="py-16 bg-black text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href={product.image} className="block image-popup">
              <img 
                src={product.image} 
                className="aspect-square rounded-lg shadow-lg"
                alt={product.name}
              />
            </a>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{product.name}</h3>
            <p className="text-[#c49b63] text-xl font-bold mb-6">${product.price.toFixed(2)}</p>
            
            <p className="mb-4">{product.description}</p>
            <p className="mb-8">{product.details}</p>

            <div className="space-y-6">
              {/* Size Selection */}
              {product.sizes && (
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-400">Size</label>
                  <div className="relative">
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    >
                      {product.sizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex flex-col space-y-2">
                <label className="text-gray-400">Quantity</label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange('minus')}
                    className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-l focus:outline-none flex items-center justify-center border border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="bg-gray-800 border-t border-b border-gray-700 text-white text-center w-16 h-10"
                  />
                  <button
                    onClick={() => handleQuantityChange('plus')}
                    className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-r focus:outline-none flex items-center justify-center border border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-[#c49b63] hover:bg-[#d8af70] text-black font-bold py-3 px-6 rounded transition-colors duration-300 mt-6"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default SingleProduct;