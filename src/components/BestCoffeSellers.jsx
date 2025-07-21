import React, { useState } from 'react';
import { motion } from 'motion/react';
import person_2 from '../images/person_2.jpg';
import person_3 from '../images/person_3.jpg';
import person_4 from '../images/person_4.jpg';
import menu_1 from '../images/menu-1.jpg';
import menu_2 from '../images/menu-2.jpg';
import menu_3 from '../images/menu-3.jpg';
import menu_4 from '../images/menu-4.jpg';
import { Link } from 'react-router';
import { useCart } from './Helping Files/CartContext';
//  backgroundImage: `url(${menu-1})`


const products = [
  {
    id: 1,
    name: "Coffee Capuccino",
    description: "A small river named Duden flows by their place and supplies",
    price: 5.90,
    image: menu_1
  },
  {
    id: 2,
    name: "Coffee Latte",
    description: "A small river named Duden flows by their place and supplieslows by their place and supplies",
    price: 5.90,
    image: menu_2
  },
  {
    id: 3,
    name: "Coffee Americano",
    description: "A small river named Duden flows by their place and supplies",
    price: 5.90,
    image: menu_3
  },
  {
    id: 4,
    name: "Coffee Espresso",
    description: "A small river named Duden flows by their place and supplies ",
    price: 5.90,
    image: menu_4
  }
];
const CoffeeSellers = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const galleryItems = [
    { id: 1, image: person_2 },
    { id: 2, image: person_4},
    { id: 3, image: person_3 },
    { id: 4, image: person_4 }
  ];

  const GitemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c49b63] text-2xl font_subheading font-medium tracking-wider block mb-2">Discover</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Best Coffee Sellers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to="/single" state={{prod:product}} className="block aspect-square bg-cover bg-center" 
                 style={{ backgroundImage: `url(${product.image})` }} />
              
              <div className="p-4 flex flex-col grow text-center">
                <h3 className="text-2xl max-h-16 mb-2 font-medium text-gray-800">
                  <Link to="/single" state={{prod:product}} className="hover:text-[#c49b63] text-white">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-500 mb-auto">{product.description}</p>
                  <p className="text-[#c49b63] font-bold text-xl mt-2 mb-2">${product.price.toFixed(2)}</p>
                <button onClick={()=>handleAddToCart(product)} className="inline-block border border-[#c49b63] text-[#c49b63] hover:bg-[#c49b63] hover:text-white px-6 py-2 rounded-md transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden"
              variants={GitemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to="/single" state={{prod:item}} 
                className="block aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg 
                      className="w-8 h-8" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CoffeeSellers;


 
  
