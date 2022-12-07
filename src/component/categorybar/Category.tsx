import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'
const category = () => {
  return (
    <div className='outer_navli '>
      <p className='navli_category fontWeight-700'>
        <li>Categories</li>
      </p>
      <div>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>All</li>
        </NavLink>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>Vegetables</li>
        </NavLink>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>Fruits</li>
        </NavLink>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>Dry Fruits</li>
        </NavLink>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>Spices</li>
        </NavLink>
        <NavLink to='/' className='navlist mx-4'>
          <li className='navlist  '>Canned</li>
        </NavLink>
      </div>
    </div>
  )
}

export default category
