import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero/Hero';

import './Home.css';
const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar/> 
      <Hero/>
      
    </div>
  );
}

export default HomePage;
