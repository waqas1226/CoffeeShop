import React from 'react';

const Contact_Table = () => {
  return (
    <section className="bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-end">
          {/* Contact Info Section */}
          <div className="w-full lg:w-2/3 bg-black shadow-md rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Phone Info */}
              <div className="flex p-6 items-start">
                <div className="bg-[#c49b63] p-3 rounded-full text-white mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className='mx-auto'>
                  <h3 className="text-md font-bold">000 (123) 456 7890</h3>
                  <p className="mt-1 text-gray-400">A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex p-6 items-start">
                <div className="bg-[#c49b63] p-3 rounded-full text-white mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className='mx-auto'>
                  <h3 className="text-md font-bold ">198 West 21th Street</h3>
                  <p className=" mt-1 text-gray-400">203 Fake St. Mountain View, San Francisco, California, USA</p>
                </div>
              </div>

              {/* Hours Info */}
              <div className="flex p-6 items-start">
                <div className="bg-[#c49b63] p-3 rounded-full text-white mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className='mx-auto'>
                  <h3 className="text-md font-bold ">Open Monday-Friday</h3>
                  <p className=" mt-1 text-gray-400">8:00am - 9:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="w-full lg:w-[30%] bg-[#c49b63] p-2 lg:absolute z-20 lg:right-0">
            <h3 className="text-2xl font-bold text-white mb-6">Book a Table</h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                    placeholder="First Name" 
                  />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                    placeholder="Last Name" 
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                    placeholder="Date" 
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                    placeholder="Time" 
                  />
                </div>
              </div>

              <div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                  placeholder="Phone" 
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <textarea 
                    rows="3" 
                    className="w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]" 
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex items-end">
                  <button 
                    type="submit" 
                    className="w-full bg-white text-[#c49b63] font-bold py-3 px-6 rounded hover:bg-gray-100 transition duration-200"
                  >
                    Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Table;