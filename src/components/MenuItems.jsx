import React from 'react';
import { motion } from 'motion/react';

import { menuCategories } from './HelpingFiles/menuData';
import { Link } from 'react-router';
// import MenuCategory from './MenuCategory';

const MenuItems = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {menuCategories.map(category => (
            <div key={category.id} className="w-full md:w-1/2 lg:w-1/2 px-4 mb-10">
              <MenuCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuItems;


const MenuCategory = ({ category }) => {
  return (
    <div className="mt-6 mb-12">
      <h3 className="text-3xl font-bold mb-8 border-b pb-3 border-[#c49b63]">
        {category.name}
      </h3>
      <div className="space-y-8">
        {category.items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


const MenuItem = ({ item }) => {
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to='/single' state={{ prod: item }}
        className="w-20 h-20 flex-shrink-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="pl-4 flex-grow">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold text-left">{item.name}</h3>
          <span className="text-[#c49b63] font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 mt-1 text-sm text-left">{item.description}</p>
      </div>
    </motion.div>
  );
};
