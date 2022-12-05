import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Mobilenav.css'

const Mobilenav = ({}) => {
  const [showMobileNav, setMobileNav] = useState(true)
  const navbarHandler = () => {
    setMobileNav(!showMobileNav)
  }
  console.log(showMobileNav, 'saktiman')
  return (
    <div className=' d-flex-column w-100 border'>
      <div className='d-flex justify-content-between p-2'>
        <button onClick={() => navbarHandler()} className='bg-light '>
          <i className='fa fa-bars' aria-hidden='true'></i>
        </button>

        <div className='d-flex flex-row border mx-2 '>
          <i
            className='fa fa-user-o person-icon'
            style={{ fontSize: '8vw' }}
            aria-hidden='true'
          ></i>
          <i
            className='fa fa-shopping-cart cart_icon'
            style={{ fontSize: '8vw' }}
            aria-hidden='true'
          ></i>
          {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
        </div>
      </div>
      {showMobileNav && (
        <div className=' d-flex flex-column align-items-center'>
          <NavLink to='#' className='text-decoration-none   my-2'>
            <li className='' style={{ listStyle: 'none' }}>
              Home
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='' style={{ listStyle: 'none' }}>
              Shop
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='' style={{ listStyle: 'none' }}>
              About
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='' style={{ listStyle: 'none' }}>
              Contact
            </li>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Mobilenav
