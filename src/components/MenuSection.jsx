import { motion } from "motion/react"
import React from 'react';

import menu_1 from '../images/menu-1.jpg';
import menu_2 from '../images/menu-2.jpg';
import menu_3 from '../images/menu-3.jpg';
import menu_4 from '../images/menu-4.jpg';
import { useNavigate } from "react-router";

const MenuSection = () => {
  const navigate = useNavigate();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container opacity-90 mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Text Content - Right aligned on desktop */}
          <motion.div 
            className="w-full lg:w-1/2 lg:px-10 mb-10 lg:mb-0 text-center lg:text-right"
            variants={itemVariants}
          >
            <motion.span 
              className="text-[#c49b63] font_subheading text-2xl font-medium tracking-wider block mb-2"
              variants={itemVariants}
            >
              Discover
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Our Menu
            </motion.h2>
            <motion.p 
              className="mb-6 text-gray-500 leading-relaxed"
              variants={itemVariants}
            >
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </motion.p>
            <motion.a 
              onClick={()=>navigate('/menu')}
              className="cursor-pointer inline-block border-2 border-[#c49b63] text-[#c49b63] hover:bg-[#c49b63] hover:text-black px-6 py-3 transition duration-300 font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Menu
            </motion.a>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <motion.div 
                className="aspect-square"
                variants={imageVariants}
              >
                <a 
                  href="#" 
                  className="block w-full h-full bg-cover bg-center hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${menu_1})` }}
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div 
                className="aspect-square mt-0 lg:mt-8"
                variants={imageVariants}
              >
                <a 
                  href="#" 
                  className="block w-full h-full bg-cover bg-center hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${menu_2})` }}
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div 
                className="aspect-square"
                variants={imageVariants}
              >
                <a 
                  href="#" 
                  className="block w-full h-full bg-cover bg-center hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${menu_3})` }}
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div 
                className="aspect-square mt-0 lg:mt-8"
                variants={imageVariants}
              >
                <a 
                  href="#" 
                  className="block w-full h-full bg-cover bg-center hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: `url(${menu_4})` }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;