import React from 'react'
import './Breadcrumb.css'

function Breadcrumb() {
  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb d-flex justify-content-center'>
          <li className='breadcrumb-item beadcrumb_font'>
            <a href='#'>Home</a>
          </li>
          <li className='breadcrumb-item beadcrumb_font'>
            <a href='#'>Library</a>
          </li>
          <li className='breadcrumb-item active_breadcrumb'>
            Data
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
