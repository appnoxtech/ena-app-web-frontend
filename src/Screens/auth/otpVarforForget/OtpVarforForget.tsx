import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import '../../../assets/global/global.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import OtpInput from '../../../component/otpInput/OtpInput'
import ButtonComp from '../../../component/Common/buttonComp/ButtonComp'
import { useVerifyOtpForgetHook } from '../../../hooks/authHooks/VerifyOtpForgetpass'
import Timer from '../../../component/Common/timer/Timer'

function OtpVarForForget() {
  const { state } = useLocation()
  const handleotp = useVerifyOtpForgetHook()

  const [input, setinput] = useState([])

  const result = input.join('')
  const x = parseInt(result)

  const heading = 'OTP Verification'
  const navigate = useNavigate()

  const data = {
    email: state.email,
    otp: x,
    password: state.password,
  }

  // ----- navigate handler -----

  const navigationHandler = () => {
    handleotp(data)
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-4 text-center d-none d-lg-block'>
              <img src={banner} className='img-fluid w-75 p-3 pt-0' />
            </div>
            <div className='col-4 text-center d-none d-md-block d-lg-none'>
              <img src={banner} className='img-fluid w-100 p-3 pt-0' />
            </div>
            <div className='col-12 text-center d-lg-none d-sm-block d-md-none'>
              <img src={EnaLogo} className='img-fluid w-50 p-3 mt-5 pt-5' />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12'>
              <IoIosArrowBack
                className='border mt-3 rounded-3 backicon d-none d-md-block d-lg-block'
                size={30}
                onClick={() => navigate(-1)}
              />
              <div className='col-10 mx-auto mt-3 pt-0'>
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>
                  Enter the verification code we just sent on your email <br /> address.
                </p>
                <div className='text-center'>
                  <OtpInput setInput={setinput} Input={input} />
                </div>
                {/* <Timer /> */}

                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class='py-2 w-100 h-100 mt-4 fontWeight-600 button themecolor btnRadius text-light'
                  btvalue='Verify'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpVarForForget