import React from 'react'
import './Category.css'
const category = () => {
  return (
    <div className='outer_navli '>
      <a className='navli_category'>
        <li>Categories</li>
      </a>
      <div>
        <a className='navli mx-4'>
          <li className='navli  '>All</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Vegetables</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Fruits</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Dry Fruits</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Spices</li>
        </a>
        <a className='navli mx-4'>
          <li className='navli  '>Canned</li>
        </a>
      </div>
    </div>
  )
}

export default category
