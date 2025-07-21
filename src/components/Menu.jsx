import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Contact_Table from './Contact_Table';
import MenuItems from './MenuItems';
import ProductsSection from './ProductsSection';
import Footer from './Footer';

function Menu(props) {
    return (
         <>
    <Navbar />
    <Carousel/>
    <Contact_Table/>
    <MenuItems/>
    <ProductsSection/>
    <Footer/>
    
    </>
    );
}

export default Menu;