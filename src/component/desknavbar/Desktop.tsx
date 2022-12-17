import React from 'react'
import { NavLink } from 'react-router-dom'
import './Desktop.css'
import Ena from '../../assets/images/enaLogoGreen.png'

const Desktop = () => {
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
  return (
    <div className='col-12 p-4'>
      <div className='  d-md-flex justify-content-between align-items-center  '>
        <NavLink to={'/'}>
        <div>
          <img className='imageProp ' src={Ena} alt='Ena' />
        </div>
        </NavLink>
        <div className='navOuter '>
          {MenuItem.map((item,index) => (
            <li className='navli  ' key={index}>
              <NavLink to={item.path} className='navli mx-4'>
                {item.navName}
              </NavLink>
            </li>
          ))}
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <NavLink to='/login'>
            <i className='fa fa-user-o person-icon' aria-hidden='true'></i>
          </NavLink>
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
