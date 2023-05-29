import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import LoginInput from '../../../component/common-components/loginInput'
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp'

import { useCreatePassHook } from '../../../hooks/authHooks/CreatePassHook'

function ResetPass() {
  const { state } = useLocation()
  const heading = 'Create new password'
  const navigate = useNavigate()
  const handleCreatePass = useCreatePassHook()

  // ------ state for inputs --------
  const initialState = {
    email: `${state.email}`,
    password: '',
    confirmPassword: '',
  }
  const localErrorState = { passwordError: '', confirmPassword: '' }

  const [input, setinput] = useState(initialState)

  const [localError, setlocalError] = useState(localErrorState)

  const checkValidation = () => {
    if(input.password !== ''){
      if(input.password.length >= 8){
        setlocalError({ ...localErrorState, passwordError: '' });
        if(input.confirmPassword !== ''){
          if(input.confirmPassword === input.password){
            setlocalError({ ...localErrorState, confirmPassword: '' });
            return true;
          }else{
            setlocalError({ ...localErrorState, confirmPassword: "Password doesn't match" });
            return false;
          }
        }else{
          setlocalError({ ...localErrorState, confirmPassword: 'Please Confirm your Password' });
          return false;
        }
      }else{
        setlocalError({ ...localErrorState, passwordError: 'Password must be of 8 digits' });
        return false
      }

    }else{
      setlocalError({ ...localErrorState, passwordError: 'Password is Required' });
      return false;
    }
  }

  // -------- navigate handler --------

  const navigationHandler = async() => {
    if (checkValidation()) {
      await handleCreatePass(input);
    }else {
      return
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
              <div className='col-10 mx-auto mt-0 pt-0 mt-3'>
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>Your new password must be unique from those previously used.</p>
                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>Password</label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter new password'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                {localError.passwordError == '' ? null : (
                  <p className='text-danger mt-1'>{localError.passwordError}</p>
                )}
                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>
                  Confirm Password
                </label>
                <LoginInput
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm new password'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                {localError.confirmPassword == '' ? null : (
                  <p className='text-danger mt-1'>{localError.confirmPassword}</p>
                )}
                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class='py-2 text-light w-100 h-100 mt-4 fontWeight-600  themecolor btnRadius'
                  btvalue='Reset Password'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPass
