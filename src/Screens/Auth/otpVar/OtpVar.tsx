import React from 'react'
import Navbar from '../../../component/navbar/NavBar'
import '../index.css'
import banner from '../../../assets/images/bannerH.png'
import bannerforphone from '../../../assets/images/banner.png'
import { IoIosArrowBack } from 'react-icons/all'
import { NavLink, useNavigate } from 'react-router-dom'
import DesktopFooter from '../../../component/footer/Footer'
import OtpInput from '../../../component/otpInput/OtpInput'


function OtpVar() {
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
                <p className='heading mt-1'>OTP Verification</p>
                <p className='subheading'>
                  Enter the verification code we just sent on your email <br /> address.
                </p>
                <div className='text-center'>
                  <OtpInput />
                </div>
                <NavLink to='/otp_verified'>
                  <button type='button' className='btn w-100 h-100 mt-4 button'>
                    Verify
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

export default OtpVar
