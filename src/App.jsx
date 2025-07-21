import { useState } from 'react'
import './App.css'
import { HashRouter,BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router";

import Home from './components/Home'
import Menu from './components/Menu'
import Blog from './components/Blog';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Shop from './components/Shop';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import BlogPost from './components/Blog_single';
import CheckoutPage from './components/Checkout';
import ScrollToTop from './components/HelpingFiles/ScrollToTop';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';

function App() {
  const [count, setCount] = useState(0)

  return (
     <HashRouter>
      <ScrollToTop/>
                <Routes>
                  <Route path="/">
                      <Route index element={<Home/>} />
                     
                      <Route path="menu" element={<Menu/>} />
                      <Route path="blog" element={<Blog/>} />
                      <Route path="about" element={<About/>} />
                      <Route path="services" element={<Services/>} />
                      <Route path="contact" element={<Contact/>} />
                      <Route path="shop" element={<Shop/>} />
                      <Route path="single" element={<SingleProduct/>} />
                      <Route path="cart" element={<Cart/>} />
                      <Route path="blog_single" element={<BlogPost/>} />
                      {/* <ProtectedRoute> */}
                      <Route path="checkout" element={<CheckoutPage/>} />
                      {/* </ProtectedRoute> */}
                      <Route path="register" element={<Register/>} />
                      <Route path="login" element={<Login/>} />
                      <Route path="logout" element={<Logout/>} />
                      {/* <Route exact path="blog" element={<Blog/>} />
                      <Route exact path="blog_post" element={<Blog_Post/>} />
                      <Route exact path="contact" element={<Contact_us/>} /> */}
                      </Route>
                </Routes>
              </HashRouter>
      )
}

export default App
