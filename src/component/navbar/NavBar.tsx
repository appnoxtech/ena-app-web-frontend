import React, { useState } from 'react'
import './Navbar.css'
import Desktop from '../desknavbar/Desktop'
import Mobilenav from '../mobilenav/Mobilenav'

function Navbar() {
 
  return (
    <div>
      <div className='d-none d-md-flex '>
        <Desktop />
      </div>

      <div className='d-flex d-md-none flex-column align-items-end'>
        <Mobilenav />
      </div>
    </div>
  )
}

export default Navbar
