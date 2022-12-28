import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import '../../../assets/global/global.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import LoginInput from '../../../component/common-components/loginInput'
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp'

import { useSignupHook } from '../../../hooks/authHooks/SignupHook'

function Signup() {
  const heading = 'Sign up'
  const navigate = useNavigate()
  const handelSignup = useSignupHook()
  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password:''
  }
  const localErrorState = { firstnameError:'',lastnameError:'', emailError: '', passwordError: ''}

  const [localError, setlocalError] = useState(localErrorState)

  // ------- state for inputs -----

  const [input, setinput] = useState(initialState)
  

  const {firstname,lastname,email,password} = input
  const user = {firstname,lastname,email,password}

  
  const checkValidation=()=>{
    if(input.firstname!=''){
      setlocalError({ ...localErrorState, firstnameError: '' })
      if(input.lastname!=''){
        setlocalError({ ...localErrorState, lastnameError: '' })
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
          setlocalError({ ...localErrorState, emailError: '' })
          if(input.password == input.confirm_password){
            setlocalError({ ...localErrorState, passwordError: '' })
            return true
          }else{
            setlocalError({ ...localErrorState, passwordError: 'Password not matched' })
            return false
          }
        }else{
          setlocalError({ ...localErrorState, emailError: 'Wrong Email' })
          return false
        }
      }else{
        setlocalError({ ...localErrorState, lastnameError: 'Required field' })
        return false
      }
    }else{
      setlocalError({ ...localErrorState, firstnameError: 'Required field' })
      return false
    }
  }


  // -------- navigate handler ------

  const navigationHandler = () => {
    if(checkValidation()){
      handelSignup(user)
    }
   
  }

  // -------- validation goes here ---------

  // --------- validation Ends here ---------

  return (
    <>
      <div className='container-fluid mt-4'>
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
                  Already have an account ?
                  <NavLink to='/login'>
                    <span className='font-green fontWeight-700'> Sign in </span>
                  </NavLink>
                </p>
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                  First Name
                </label>
                <LoginInput
                  type='text'
                  name='firstname'
                  id='firstname'
                  placeholder='Enter your firstname'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                 {localError.firstnameError == '' ? null : (
                  <p className='text-danger'>{localError.firstnameError}</p>
                )}
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                  Last Name
                </label>
                <LoginInput
                  type='text'
                  name='lastname'
                  id='lastname'
                  placeholder='Enter your lastname'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                 {localError.lastnameError == '' ? null : (
                  <p className='text-danger'>{localError.lastnameError}</p>
                )}

                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                  Email
                </label>
                <LoginInput
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                 {localError.emailError == '' ? null : (
                  <p className='text-danger'>{localError.emailError}</p>
                )}
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                  Password
                </label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block lable'>
                  Confirm Password
                </label>
                <LoginInput
                  type='password'
                  name='confirm_password'
                  id='confirm_password'
                  placeholder='Confirm your password'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                 {localError.passwordError == '' ? null : (
                  <p className='text-danger'>{localError.passwordError}</p>
                )}

                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class='btn w-100 h-100 mt-4 fontWeight-600 button1'
                  btvalue='Sign up'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup