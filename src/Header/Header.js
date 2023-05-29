import React from 'react'
import Navbar from './Navbar';
import Background from './Background';
import Summary from './Summary';

const Header = () => {

  return (
    <div className='container '>
        <Navbar />
        <Background />
        <Summary />
    </div>
    )
  }

export default Header;
