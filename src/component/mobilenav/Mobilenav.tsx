import React from 'react';

const Mobilenav = () => {
  return (
    <div className=' d-flex-column'>
      <div className=' d-flex-column '>
        <a className='text-decoration-none  mx-4'>
          <li className='  '>Home</li>
        </a>
        <a className='text-decoration-none mx-4'>
          <li className='  '>Shop</li>
        </a>
        <a className='text-decoration-none mx-4'>
          <li className='  '>About</li>
        </a>
        <a className='text-decoration-none mx-4'>
          <li className='  '>Contact</li>
        </a>
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
