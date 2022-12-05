import React, { useState } from 'react'
import './Navbar.css'
import Desktop from '../desknavbar/Desktop'
import Mobilenav from '../mobileNav/Mobilenav'

function Navbar() {
  const [showMobileNav, setMobileNav] = useState(false)
  const navbarHandler = () => {
    setMobileNav(!showMobileNav)
  }
  return (
    <div>
      <div className='d-none d-md-flex  '>
        <Desktop />
      </div>

      <div className='d-flex d-md-none flex-column align-items-end'>
        <div>
          <button onClick={() => navbarHandler()}>
            <i className='fa fa-bars' aria-hidden='true'></i>
          </button>
        </div>
        {showMobileNav && <Mobilenav />}
      </div>
    </div>
  )
}

export default Navbar;
