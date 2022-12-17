import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import './Desktop.css'
import Ena from '../../assets/images/enaLogoGreen.png'
import { Button, OverlayTrigger, Popover, PopoverHeader } from 'react-bootstrap'

const Desktop = () => {
  const navigate = useNavigate()
  const MenuItem = [
    {
      navName: '',
      path: '/',
    },
    {
      navName: '',
      path: '/shop',
    },
    {
      navName: '',
      path: '/about',
    },
    {
      navName: '',
      path: '/contact',
    },
  ]

  // function for logout

  const Logout = () => {
    localStorage.removeItem('CUSTOMER_Token')
    navigate('#')
  }

  return (
    <div className='col-12 p-4'>
      <div className='  d-md-flex justify-content-between align-items-center  '>
        <NavLink to={'/'}>
          <div>
            <img className='imageProp ' src={Ena} alt='Ena' />
          </div>
        </NavLink>
        <div className='navOuter '>
          {MenuItem.map((item, index) => (
            <li className='navli  ' key={index}>
              <NavLink to={item.path} className='navli mx-4'>
                {item.navName}
              </NavLink>
            </li>
          ))}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <OverlayTrigger
            trigger='focus'
            key='bottom'
            placement='bottom'
            overlay={
              <Popover id='popover-positioned-bottom'>
                <Popover.Body>
                  {localStorage.getItem('CUSTOMER_Token') ? (
                    <NavLink to='#' onClick={() => Logout()}>
                      Logout
                    </NavLink>
                  ) : (
                    <NavLink to='/login'>Log in</NavLink>
                  )}
                </Popover.Body>
              </Popover>
            }
          >
            <Button className='nav__link' variant=''>
              <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
            </Button>
          </OverlayTrigger>
          <i className='fa fa-heart-o heart_icon' aria-hidden='true'></i>
          <NavLink to='/cart'>
            <i className='fa fa-shopping-cart cart_icon' aria-hidden='true'></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Desktop
