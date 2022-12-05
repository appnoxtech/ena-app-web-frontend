import React from 'react'
import './Navbar.css'
import Desktop from '../desktopnav/Desktop'
import Mobilenav from '../mobilenav/Mobilenav'

function Navbar() {
  return (
    <div>
      <div className='d-none d-md-flex  '>
      <Desktop/>
      </div>

      <div className='d-flex d-md-none'>
        <i className='fa fa-bars' aria-hidden='true'></i>
        <Mobilenav/>
      </div>
    </div>
  )
}

export default Navbar
