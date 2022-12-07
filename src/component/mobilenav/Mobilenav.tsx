import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import EnaLogo from '../../Assets/Images/enaLogoGreen.png'
import '../../Assets/global/global.css'
import './Mobilenav.css'

const Mobilenav = ({}) => {
  const MenuItem = [
    {
      navName: 'Home',
      path: '/',
    },
    {
      navName: 'Shop',
      path: '/shop',
    },
    {
      navName: 'About',
      path: '/about',
    },
    {
      navName: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <>
      <div className=' d-flex-column w-100 border'>
        <div className='d-flex justify-content-between p-2'>
          <button
            className='bg-light border-0'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          >
            <i className='fa fa-bars fs-2 font-green' aria-hidden='true'></i>
          </button>
          <div
            className='offcanvas offcanvas-start'
            id='offcanvasExample'
            aria-labelledby='offcanvasExampleLabel'
          >
            <div className='offcanvas-header border'>
              <img src={EnaLogo} className='offcanvas-title w-25 ms-4' id='offcanvasExampleLabel' />
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <div className='mt-3'>
                <ul className=''>
                  {MenuItem.map((item, index) => (
                    <li className='py-2' key={index}>
                      <NavLink className='h3' to={item.path}>
                        {item.navName}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='d-flex flex-row  mx-2 '>
            <NavLink to='/login'>
              <i className='fa fa-user-o me-4 fs-2 font-green' aria-hidden='true'></i>
            </NavLink>
            <i
              className='fa fa-shopping-cart me-2 cart_icon fs-2 font-green'
              aria-hidden='true'
            ></i>
            {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mobilenav
