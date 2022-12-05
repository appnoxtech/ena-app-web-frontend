import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../Assets/global/global.css'
import './Mobilenav.css'

const Mobilenav = ({}) => {
  const [showMobileNav, setMobileNav] = useState(false)
  const navbarHandler = () => {
    setMobileNav(!showMobileNav)
  }
  console.log(showMobileNav, 'saktiman')
  return (
    <div className=' d-flex-column w-100 border'>
      <div className='d-flex justify-content-between p-2'>
        <button onClick={() => navbarHandler()} className='bg-light border-0'>
          <i className='fa fa-bars fs-2 font-green' aria-hidden='true'></i>
        </button>

        <div className='d-flex flex-row  mx-2 '>
          <i
            className='fa fa-user-o me-4 fs-2 font-green'
            aria-hidden='true'
          ></i>
          <i
            className='fa fa-shopping-cart me-2 cart_icon fs-2 font-green'
            aria-hidden='true'
          ></i>
          {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
        </div>
      </div>
      {showMobileNav && (
        <div className=' d-flex flex-column align-items-center'>
          <NavLink to='#' className='text-decoration-none   my-2'>
            <li className='menu_bar' >
              Home
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='menu_bar' >
              Shop
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='menu_bar' >
              About
            </li>
          </NavLink>
          <NavLink to='#' className='text-decoration-none  my-2'>
            <li className='menu_bar' >
              Contact
            </li>
          </NavLink>
        </div>
      )}
    </div>
  )
      }

export default Mobilenav