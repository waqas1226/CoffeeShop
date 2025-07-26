import React, { useState } from 'react';
import { useCart } from './HelpingFiles/CartContext';
import Navbar from './Navbar';
import ProductsSection from './ProductsSection';
import Footer from './Footer';
import { Link } from 'react-router';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();
  const subtotal = cartTotal;
  const delivery = 0;
  const discount = 3.00;
  const total = subtotal + delivery - discount
  return (
    <>
      <Navbar/>
      <section className="py-8 pt-28 pb-6 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Cart Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#c49b63] mb-6 sm:mb-8">Your Cart</h1>
            
            {/* Mobile Cart Items */}
            <div className="md:hidden space-y-4 mb-8">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.size}`} 
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-4 flex-1">
                        <div 
                          className="w-16 h-16 bg-cover bg-center rounded-md border border-gray-600 flex-shrink-0"
                          style={{backgroundImage: `url(${item.product.image})`}}
                        ></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-base font-medium text-white">{item.product.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.product.id, item.size)}
                              className="text-red-400 hover:text-red-300 transition-colors ml-2"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                          {item.size && (
                            <p className="text-xs text-gray-400">Size: {item.size}</p>
                          )}
                          <p className="text-sm text-gray-300 mt-1">${item.product.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-gray-600 rounded-md overflow-hidden bg-gray-700">
                        <button
                          onClick={() => updateQuantity(
                            item.product.id, 
                            item.size, 
                            item.quantity - 1
                          )}
                          className="px-2 sm:px-3 py-1 bg-gray-600 hover:bg-gray-500 text-gray-200 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min="1"
                          max="100"
                          onChange={(e) => 
                            updateQuantity(
                              item.product.id, 
                              item.size, 
                              parseInt(e.target.value) || 1
                            )
                          }
                          className="w-10 sm:w-12 text-center border-x border-gray-600 py-1 bg-gray-700 text-white"
                        />
                        <button
                          onClick={() => updateQuantity(
                            item.product.id, 
                            item.size, 
                            item.quantity + 1
                          )}
                          className="px-2 sm:px-3 py-1 bg-gray-600 hover:bg-gray-500 text-gray-200 transition-colors"
                          disabled={item.quantity >= 100}
                        >
                          +
                        </button>
                      </div>
                      <p className="text-[#c49b63] font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-gray-400 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-xl">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Start shopping to add items</p>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Cart Items Table */}
            <div className="hidden md:block bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr className="text-left">
                      <th className="py-4 px-6 w-12"></th>
                      <th className="py-4 px-6 text-gray-300">Product</th>
                      <th className="py-4 px-6 text-right text-gray-300">Price</th>
                      <th className="py-4 px-6 text-center text-gray-300">Quantity</th>
                      <th className="py-4 px-6 text-right text-gray-300">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 && cartItems.map((item) => (
                      <tr 
                        key={`${item.product.id}-${item.size}`} 
                        className="border-t border-gray-700 hover:bg-gray-750 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <button 
                            onClick={() => removeFromCart(item.product.id, item.size)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </td>
                        
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div 
                              className="min-w-20 h-20 bg-cover bg-center rounded-md mr-4 border border-gray-600"
                              style={{backgroundImage: `url(${item.product.image})`}}
                            ></div>
                            <div className='text-left'>
                              <h3 className="text-lg font-medium text-white">{item.product.name}</h3>
                              {item.size && (
                                <p className="text-sm text-gray-400">Size: {item.size}</p>
                              )}
                              <p className="text-sm text-gray-400 mt-1 line-clamp-1">{item.product.description}</p>
                            </div>
                          </div>
                        </td>
                        
                        <td className="py-4 px-6 text-right text-gray-300">
                          ${item.product.price.toFixed(2)}
                        </td>
                        
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <div className="flex items-center border border-gray-600 rounded-md overflow-hidden bg-gray-700">
                              <button
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.size, 
                                  item.quantity - 1
                                )}
                                className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-gray-200 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                max="100"
                                onChange={(e) => 
                                  updateQuantity(
                                    item.product.id, 
                                    item.size, 
                                    parseInt(e.target.value) || 1
                                  )
                                }
                                className="w-12 text-center border-x border-gray-600 py-1 bg-gray-700 text-white"
                              />
                              <button
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.size, 
                                  item.quantity + 1
                                )}
                                className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-gray-200 transition-colors"
                                disabled={item.quantity >= 100}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        
                        <td className="w-28 text-center text-[#c49b63] font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
                {!cartItems.length > 0 && <div className=" hidden md:block py-12 mb-2 text-center text-gray-400 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p className="text-xl">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Start shopping to add items</p>
                  </div>
                </div>}

              
            {/* Cart Summary */}
            <div className="flex flex-col lg:flex-row justify-end gap-8">
              <div className="w-full lg:w-1/3">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-[#c49b63] mb-4">Cart Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-gray-300">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Delivery</span>
                      <span className="text-gray-300">${delivery.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Discount</span>
                      <span className="text-green-400">-${discount.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-300">Total</span>
                      <span className="text-[#c49b63]">${subtotal?total.toFixed(2):0}</span>
                    </div>
                  </div>
                  
                  <Link to="/checkout" 
                    className={`w-full ${cartItems.length > 0 ? 'bg-[#c49b63] hover:bg-[#d8af70]' : 'bg-gray-600 cursor-not-allowed'} text-white font-bold py-3 px-4 rounded transition-colors duration-300`}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductsSection/>
      <Footer/>
    </>
  );
};

export default Cart;