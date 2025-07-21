import React, { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Footer from './Footer'
import ContactSection from './ContactSection'
import BookingSection from './BookingSection'

function Contact() {

  return (
    <>
    <Navbar />
    <Carousel/>
    <ContactSection/>
    <BookingSection/>
    <Footer/>
    </>
  )
}

export default Contact
