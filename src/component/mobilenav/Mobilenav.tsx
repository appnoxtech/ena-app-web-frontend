import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import EnaLogo from '../../assets/images/enaLogoGreen.png'
import '../../assets/global/global.css'
import './Mobilenav.css'
import { Button, OverlayTrigger, Popover, PopoverBody } from 'react-bootstrap'

const Mobilenav = ({}) => {
  const navigate = useNavigate()
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

  // function for logout

  const Logout = () => {
    localStorage.removeItem('CUSTOMER_Token')
    navigate('#')
  }

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
          <OverlayTrigger
            trigger='focus'
            key='bottom'
            placement='bottom'
            overlay={
              <Popover id='popover-positioned-bottom'>
                <PopoverBody>
                  {localStorage.getItem('CUSTOMER_Token') ? (
                    <NavLink to='#' onClick={() => Logout()}>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink to='/login'>Log in</NavLink>
                  )}
                </PopoverBody>
              </Popover>
            }
          >
            <Button className='nav__link' variant=''>
            <i className='fa fa-user-o me-4 fs-2 font-green' aria-hidden='true'></i>
            </Button>
          </OverlayTrigger>
            <NavLink to='/checkout'>
            <i
              className='fa fa-shopping-cart me-2 cart_icon fs-2 font-green'
              aria-hidden='true'
            ></i>
            </NavLink>
            {/* <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mobilenav
