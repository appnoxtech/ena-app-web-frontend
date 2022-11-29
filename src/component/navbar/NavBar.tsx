import React from 'react'
import './Navbar.css'
import Ena from '../../assets/images/enaLogo.jpg'
function Navbar() {
  return (
    <div className='d-flex justify-content-between align-items-center p-4'>
      <div>
        <img className='imageProp ' src={Ena} alt='Ena' />
      </div>
      <div className='navOuter '>
        <a className='navli mx-4'>
          <li className='navli  '>Home</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Shop</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>About</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Contact</li>
        </a>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
        <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
        <i className='fa fa-shopping-cart cart_icon' aria-hidden='true'></i>
      </div>
    </div>
  )
}

export default Navbar
