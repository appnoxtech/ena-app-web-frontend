import React from 'react'
import LoginBanner from '../../Assets/Images/Frame11209.png'

function Banner() {
  return (
        <div className=' text-center'>
            <img className='img-responsive banner' src={LoginBanner} alt='LoginBanner' width='332' height='658'/>
        </div>
  )
}

export default Banner;