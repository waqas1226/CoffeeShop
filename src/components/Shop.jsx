import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import ProductsSection from './ProductsSection';
import Footer from './Footer';

function Shop(props) {
    return (
         <>
    <Navbar />
    <Carousel/>
    <ProductsSection/>
    <Footer/>
    
    </>
    );
}

export default Shop;