import React from 'react'
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
import Slider from '../../containers/HomeSlider/Slider';

function Home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default Home