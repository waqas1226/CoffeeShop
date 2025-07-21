import React, { useState } from 'react';
import { motion } from 'motion/react';
import { categories } from './Helping Files/menuData';
import { Link } from 'react-router';
import { useCart } from './Helping Files/CartContext';

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('main');
const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Medium');

  const handleAddToCart = (product) => {
    // Add to cart logic here
    addToCart(product, quantity, selectedSize);
    console.log('Added to cart:', {
      product,
      quantity,
      selectedSize
    });}
   const activeCategory = categories.find(cat => cat.id === activeTab);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c49b63] font-medium font_subheading text-2xl tracking-wider">Discover</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Our Products</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-1 bg-gray-300 p-1 rounded-full shadow-md">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  activeTab === category.id
                    ? 'bg-[#c49b63] text-white'
                    : 'text-gray-600 hover:text-[#c49b63]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {activeCategory?.items.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <Link to="/single" state={{ prod: item }} className="block aspect-4/3 bg-cover bg-center" 
                 style={{ backgroundImage: `url(${item.image})` }} />
              
              <div className="px-6 py-4 grow flex flex-col text-center">
                <h3 className="text-2xl font-medium text-white min-h-12">
                  <a href="#" className="hover:text-[#c49b63] transition-colors">
                    {item.name}
                  </a>
                </h3>
                <p className="text-gray-500 mb-4">
                  {item.description}
                </p>
                <p className="text-[#c49b63] mt-auto font-bold text-xl mb-4">${item.price.toFixed(2)}</p>
                <button className="inline-block border border-[#c49b63] text-[#c49b63] hover:bg-[#c49b63] hover:text-white px-6 py-2 rounded-md transition-colors duration-300"
                 onClick={()=>handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;