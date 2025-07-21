import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BookingSection = () => {
  // State for all form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    phone: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <section className="relative bg-black text-white">
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-70 z-0"></div> */}
      
      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-96 lg:h-auto">
            <div 
              id="map" 
              className="w-full h-full bg-gray-800"
              aria-label="Location map"
            >
              <div className="flex items-center justify-center h-full text-gray-400">
     
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore!5e0!3m2!1sen!2s!4v1753102971653!5m2!1sen!2s" 
                width="100%" height="100%" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <motion.div 
            className="w-full lg:w-1/2 p-8 lg:p-12 bg-black"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font_subheading italic mb-6 text-[#c49b63]">Book a Table</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              {/* Date/Time/Phone Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    placeholder="Time"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                  placeholder="Phone"
                  required
                />
              </div>

              {/* Message and Submit */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <textarea 
                    rows="3" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex items-end">
                  <button 
                    type="submit" 
                    className="w-full bg-[#c49b63] hover:bg-[#d8af70] text-black font-bold py-3 px-6 rounded transition-colors duration-300"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;