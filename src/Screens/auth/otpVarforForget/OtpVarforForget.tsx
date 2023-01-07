import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import '../../../assets/global/global.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import OtpInput from 'react-otp-input';
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp'
import { useVerifyOtpForgetHook } from '../../../hooks/authHooks/VerifyOtpForgetpass'
import Timer from '../../../component/common-components/timer/Timer'

function OtpVarForForget() {
  const { state } = useLocation()
  const handleotp = useVerifyOtpForgetHook()
  const [error, setError] = useState('');
  const [input, setinput] = useState('')

  const heading = 'OTP Verification'
  const navigate = useNavigate()

  const data = {
    email: state.email,
    otp: input,
    password: state.password,
  }

  // ----- navigate handler -----

  const navigationHandler = () => {
    if (input.length < 4) {
      setError('Invalid OTP');
    } else {
      setError('');
      handleotp(data);
    }
  }

  const handleChange = (otp: any) => {
    setinput(otp);
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
                <OtpInput
                  value={input}
                  onChange={handleChange}
                  numInputs={4}
                  isInputNum={true}
                  inputStyle={{
                    type: 'text',
                    width: 80,
                    height: 80,
                    margingLeft: 3,
                    border: '3px solid #d7dcd2',
                    borderRadius: '3px',
                  }}
                  containerStyle={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                  }}
                  focusStyle={{
                    border: '3px solid #51BC4A',
                    borderRadius: '3px',
                  }}
                  separator={' '}
                />
                <div className="d-flex mt-2" style={{width: '90%'}}>
                  {error == '' ? null : (
                    <p className='text-danger ms-auto'>{error}</p>
                  )}
                </div>

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
