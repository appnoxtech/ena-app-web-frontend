import React from 'react'
import Navbar from '../navbar/NavBar'

type layoutProps ={
    children : React.ReactNode
}
const Layout = (props : layoutProps) => {
  return (
    <div className=' col-12'>
        <Navbar />
        <div className='col-12'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout