import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

import Footer from './Footer';
import BlogSection from './BlogSection';

function Blog(props) {
    return (
         <>
    <Navbar />
    <Carousel/>
    <BlogSection/>
    <Footer/>
    
    </>
    );
}

export default Blog;