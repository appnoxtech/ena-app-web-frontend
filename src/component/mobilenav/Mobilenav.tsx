import React from 'react';
import { NavLink } from 'react-router-dom';
import './Mobilenav.css'

const Mobilenav = () => {
  return (
    <div className=' d-flex-column w-100 border'>
      <div className=' d-flex-column '>
        <NavLink to='#' className='text-decoration-none  mx-4'>
          <li className='  '>Home</li>
        </NavLink>
        <NavLink to='#' className='text-decoration-none mx-4'>
          <li className='  '>Shop</li>
        </NavLink>
        <NavLink to='#' className='text-decoration-none mx-4'>
          <li className='  '>About</li>
        </NavLink>
        <NavLink to='#' className='text-decoration-none mx-4'>
          <li className='  '>Contact</li>
        </NavLink>
      </div>
      <div className='d-flex flex-column'>
        <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
        <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
        <i className='fa fa-shopping-cart cart_icon' aria-hidden='true'></i>
      </div>
    </div>
  )
}

export default Mobilenav
