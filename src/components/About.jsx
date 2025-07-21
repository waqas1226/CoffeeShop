import React, { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import Carousel from './Carousel'
import AboutSection from './AboutSection'
import MenuSection from './MenuSection'
import CounterSection from './Counter'
import TestimonialsSection from './Testimony'
import Footer from './Footer'

function About() {

  return (
    <>
    <Navbar />
    <Carousel/>
    <AboutSection/>
    <TestimonialsSection/>
    <MenuSection/>
    <CounterSection/>
    <Footer/>
    
    
    </>
  )
}

export default About