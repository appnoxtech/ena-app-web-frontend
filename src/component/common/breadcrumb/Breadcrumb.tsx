import React from 'react'
import './Breadcrumb.css'

function Breadcrumb() {
  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb d-flex justify-content-center'>
          <li className='breadcrumb-item beadcrumb_font'>
            <a href='#'>Shopping Cart</a>
          </li>
          <li className='breadcrumb-item beadcrumb_font'>
            <a href='#'>Checkout</a>
          </li>
          <li className='breadcrumb-item active_breadcrumb'>
            Change Address
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
