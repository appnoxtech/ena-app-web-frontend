import React from 'react'

// css imports 

import '../index.css'

// assets imports 

import Navbar from '../../../component/navbar/NavBar'
import '../index.css'
import banner from '../../../assets/images/bannerH.png'
import bannerforphone from '../../../assets/images/banner.png'
import { IoIosArrowBack } from 'react-icons/all'
import LoginInput from '../../../component/Common/LoginInput'
import { NavLink, useNavigate } from 'react-router-dom'
import DesktopFooter from '../../../component/footer/Footer'

function ForgetPass() {
  const history = useNavigate()
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
              <IoIosArrowBack
                className='border mt-3 rounded-3 backicon'
                size={30}
                onClick={() => history(-1)}
              />
              <div className='col-10 mx-auto mt-0 pt-0'>
                <p className='heading mt-1'>Forget Password ?</p>
                <p className='subheading'>
                  Don't worry! it occurs. Please enter the email address <br />
                  linked with your account.
                </p>
                <label className='form-label lable'>Email</label>
                <LoginInput type='email' name='email' id='email' placeholder='Enter your email' />
                <button
                  type='button'
                  className='btn w-100 h-100 mt-4 button'
                  onClick={() => history('/otp_verification')}
                >
                  Send Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesktopFooter />
    </>
  )
}

export default ForgetPass
