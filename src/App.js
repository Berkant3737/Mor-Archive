import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Products from "./pages/Products/Products"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App