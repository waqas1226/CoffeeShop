import React, { useState, useEffect } from 'react';
import bg_1 from '../images/bg_1.jpg';
import bg_2 from '../images/bg_2.jpg';  
import bg_3 from '../images/bg_3.jpg';
import { Link } from 'react-router';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      bgImage: bg_1,
      subheading: 'Welcome',
      title: 'The Best Coffee Testing Experience',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      id: 2,
      bgImage: bg_2,
      subheading: 'Welcome',
      title: 'Amazing Taste & Beautiful Place',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      id: 3,
      bgImage: bg_3,
      subheading: 'Welcome',
      title: 'Creamy Hot and Ready to Serve',
      description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full z-10">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Overlay */}
          {/* <div className="overlay"></div> */}
          
          {/* Content */}
          <div className="container h-full mx-auto px-4">
            <div className="h-full w-3/4 mx-auto flex flex-col justify-center items-center text-center">
              <div className="max-w-4xl w-full">
                <span className="text-2xl font_subheading font-medium tracking-wider block animate-fadeIn mb-0 leading-none text-[#c49b63] z-[1]">
                  {slide.subheading}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-xl mb-8 md:mb-10 animate-fadeIn">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
                  <a 
                    href="#" 
                    className="bg-[#c49b63] hover:bg-yellow-700 text-white font-bold py-3 px-6 md:px-8 lg:px-10 rounded transition duration-300"
                  >
                    Order Now
                  </a>
                  <Link 
                    to='/menu' 
                    className="border-2 border-white hover:bg-gray-400 hover:bg-opacity-10 text-white font-bold py-3 px-6 md:px-8 lg:px-10 rounded transition duration-300"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-yellow-400' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;