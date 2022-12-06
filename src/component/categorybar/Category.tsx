import React from 'react'
import './Category.css'
const category = () => {
  return (
    <div className='outer_navli '>
      <a className='navli_category'>
        <li>Categories</li>
      </a>
      <div>
        <a className='navlist mx-4'>
          <li className='navlist  '>All</li>
        </a>
        <a className='navlist mx-4'>
          <li className='navlist  '>Vegetables</li>
        </a>
        <a className='navlist mx-4'>
          <li className='navlist  '>Fruits</li>
        </a>
        <a className='navlist mx-4'>
          <li className='navlist  '>Dry Fruits</li>
        </a>
        <a className='navlist mx-4'>
          <li className='navlist  '>Spices</li>
        </a>
        <a className='navlist mx-4'>
          <li className='navlist  '>Canned</li>
        </a>
      </div>
    </div>
  )
}

export default category
