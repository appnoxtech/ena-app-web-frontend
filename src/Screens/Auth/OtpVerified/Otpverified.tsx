import React from 'react'
import Navbar from '../../../Component/navbar/NavBar'
import '../index.css'
import banner from '../../../Assets/Images/bannerH.png'
import bannerforphone from '../../../Assets/Images/banner.png'
import DesktopFooter from '../../../Component/footer/Footer'
import verifyImg from '../../../Assets/Images/114809-success.gif'
import { NavLink } from 'react-router-dom'

function Passchanged() {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 text-center d-none d-lg-block'>
              <img src={banner} className='img-fluid w-75 p-3 pt-0' />
            </div>
            <div className='col-12 text-center d-lg-none d-sm-block d-md-block'>
              <img src={bannerforphone} className='img-fluid w-100 p-3 pt-' />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <div className='col-10 mx-auto mt-0 pt-0 text-center'>
                <img src={verifyImg} alt='verifyImg' width='20%' />
                <p className='heading mt-1'>Password Changed</p>
                <p className='subheading'>
                  Password has been changed
                  <br />
                  successfully.
                </p>
                <NavLink to='/login'>
                  <button type='button' className='btn w-100 h-100 mt-4 button'>
                    Back to Login
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesktopFooter />
    </>
  )
}

export default Passchanged
