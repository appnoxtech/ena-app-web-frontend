import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import LoginInput from '../../../component/common/loginInput'
import ButtonComp from '../../../component/common/buttonComp/ButtonComp'
import { useForgetPassHook } from '../../../hooks/authHooks/ForgetPassHook'

function ForgetPass() {
  const heading = 'Forget Password ?'
  const navigate = useNavigate()
  const handleForgetPass = useForgetPassHook()

  // ------ state for inputs --------
  const initialState = {
    email: '',
  }
  const initialError = {
    email: '',
  }

  const [input, setinput] = useState(initialState)

  const [localError, setlocalError] = useState(initialError)

  const checkValidation = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      setlocalError({ email: '' })
    } else {
      setlocalError({ email: 'You have entered an invalid email address!' })
    }
  }

  // -------- navigate handler --------

  const navigationHandler = () => {
    checkValidation()
    if (localError.email == '') {
      handleForgetPass(input)
    } else {
      alert('wrong inputs !')
    }
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
              <div className='col-10 mx-auto mt-0 pt-0 mt-3'>
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>
                  Don't worry! it occurs. Please enter the email address linked with your account.
                </p>
                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>Email</label>
                <LoginInput
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                {localError.email == '' ? null : <p className='text-danger'>{localError.email}</p>}
                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class='py-2 text-light w-100 h-100 mt-4 fontWeight-600  themecolor btnRadius'
                  btvalue='Send Code'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPass
