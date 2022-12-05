import React from 'react'
import { NavLink } from 'react-router-dom'
import Ena from '../../assets/images/enaLogoGreen.png'
import './Desktop.css'

const Desktop = () => {
  return (
    <div className='col-12 p-4'>
      <div className='  d-md-flex justify-content-between align-items-center  '>
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
          <NavLink to='/login'>
            <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
          </NavLink>
          <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
          <i className='fa fa-shopping-cart cart_icon' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  )
}

export default Desktop
