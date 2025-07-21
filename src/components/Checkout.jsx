import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhoneAlt, 
  faUser, 
  faHome, 
  faCity, 
  faGlobeEurope, 
  faMailBulk,
  faMinus,
  faPlus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { useCart } from './HelpingFiles/CartContext';

const CheckoutPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    address: '',
    city: '',
    country: 'Turkey',
    postCode: '',
    saveInfo: false
  });
const { cartItems,removeFromCart,updateQuantity,cartTotal } = useCart();
  // Calculate order totals
  const shippingCost = 19;
  // const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const subtotal = cartTotal;
  const total = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout with formData and cartItems
    console.log('Checkout submitted:', { formData, cartItems });
    // Add your checkout logic here (e.g., API call to process payment)
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="py-6 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#c49b63]">Checkout</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <main className="w-full lg:w-7/12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#c49b63] mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your email..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your phone..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#c49b63] mb-6">Shipping Address</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FontAwesomeIcon icon={faUser} />
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your full name..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-2">Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FontAwesomeIcon icon={faHome} />
                      </div>
                      <input 
                        type="text" 
                        id="address" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your address..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-gray-300 mb-2">City *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <FontAwesomeIcon icon={faCity} />
                      </div>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required 
                        placeholder="Enter your city..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-gray-300 mb-2">Country *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <FontAwesomeIcon icon={faGlobeEurope} />
                        </div>
                        <select 
                          id="country" 
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63] appearance-none"
                        >
                          <option value="Turkey">Turkey</option>
                          <option value="Germany">Germany</option>
                          <option value="USA">USA</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">UK</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="postCode" className="block text-gray-300 mb-2">Post Code *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                          <FontAwesomeIcon icon={faMailBulk} />
                        </div>
                        <input 
                          type="text" 
                          id="postCode" 
                          name="postCode"
                          value={formData.postCode}
                          onChange={handleInputChange}
                          required 
                          placeholder="Enter your postal code..."
                          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Remember Me */}
              <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="saveInfo" 
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#c49b63] bg-gray-700 border-gray-600 rounded focus:ring-[#c49b63]"
                  />
                  <label htmlFor="saveInfo" className="ml-2 text-gray-300">
                    Save this information for next time
                  </label>
                </div>
              </section>

              {/* Continue Button */}
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-[#c49b63] hover:bg-[#d8af70] text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300 disabled:opacity-50"
                  disabled={cartItems.length === 0}
                >
                  Complete Order
                </button>
              </div>
            </form>
          </main>

          {/* Order Summary */}
          <aside className="w-full lg:w-5/12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-[#c49b63] mb-6">Order Summary</h2>
              
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 py-4 border-b border-gray-700">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-white">{item.product.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.product.id,item.size)}
                            className="text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                        <p className="text-sm mt-1">
                          <span className="text-[#c49b63]">${item.product.price.toFixed(2)}</span>
                          {/* {item.product.originalPrice && (
                            <span className="text-gray-500 line-through ml-2">${item.product.originalPrice.toFixed(2)}</span>
                          )} */}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.product.id,item.size,item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <FontAwesomeIcon icon={faMinus} className="text-sm" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id,item.size, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                            disabled={item.quantity >= 100}
                          >
                            <FontAwesomeIcon icon={faPlus} className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Shipping */}
                  <div className="flex justify-between py-4 border-b border-gray-700">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-white">${shippingCost.toFixed(2)}</span>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between py-4">
                    <span className="text-gray-400 font-bold">Total</span>
                    <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;