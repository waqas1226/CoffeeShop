import React from 'react';
import about from '../images/about.jpg';

const AboutSection = () => {
  return (
    <>
      {/* Our Story Section - Dark Theme */}
      <section className="flex flex-col md:flex-row min-h-[500px] bg-gray-900">
        {/* Image Half - Fixed to show upper portion on mobile */}
        <div 
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center bg-no-repeat bg-top"
          style={{ 
             backgroundImage: `url(${about})`,
            minHeight: "300px" // Ensures image stays visible on mobile
          }}
        ></div>
        
        {/* Content Half - Dark Theme */}
        <div className="w-full md:w-1/2 p-6 md:p-6 flex items-center bg-black">
          <div className="relative h-full text-left md:-left-30 md:text-center md:min-w-[400px] opacity-70  bg-black  p-6 md:p-6 shadow-lg">
            <div className="mb-6">
              <span className="text-[#c49b63] text-2xl font_subheading font-medium tracking-wider">Discover</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Our Story</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Dark Theme */}
      <section className="bg-[#c49b63] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Service 1 */}
            <div className="bg-[#c49b63] p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-900 p-4 rounded-full">
                  <svg className="w-10 h-10 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy to Order</h3>
              <p className="text-gray-300">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#c49b63] p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-900 p-4 rounded-full">
                  <svg className="w-10 h-10 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fastest Delivery</h3>
              <p className="text-gray-300">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#c49b63] p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-900 p-4 rounded-full">
                  <svg className="w-10 h-10 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Coffee</h3>
              <p className="text-gray-300">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;