import React from 'react'

const Footer = () => {
  //Adding style in react
  let footerStyle={
    position: 'absolute',
    width:'100%',  
    
  }
  return (
    <footer className='text-dark bg-warning' style={footerStyle}>
      <p className='text-center '>Copyright &copy; ReactMeals.com</p>
    </footer>
  )
}

export default Footer;