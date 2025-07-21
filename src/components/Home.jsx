import React, { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Contact_Table from './Contact_Table'
import AboutSection from './AboutSection'
import MenuSection from './MenuSection'
import CounterSection from './Counter'
import CoffeeSellers from './BestCoffeSellers'
import ProductsSection from './ProductsSection'
import TestimonialsSection from './Testimony'
import BlogSection from './BlogSection'
import BookingSection from './BookingSection'
import Footer from './Footer'

function Home() {

  return (
    <>
    <Navbar />
    <Carousel/>
    <Contact_Table/>
    <AboutSection/>
    <MenuSection/>
    <CounterSection/>
    <CoffeeSellers/>
    <ProductsSection/>
    <TestimonialsSection/>
    <BlogSection/>
    <BookingSection/>
    <Footer/>
    {/* <FacebookPost/> */}
    
    
    </>
  )
}

export default Home
