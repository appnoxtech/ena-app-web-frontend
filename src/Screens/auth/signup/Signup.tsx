import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import '../../../assets/global/global.css'
import banner from '../../../assets/images/bannerH.png'
import EnaLogo from '../../../assets/images/enaLogoGreen.png'
import LoginInput from '../../../component/Common/loginInput'
import ButtonComp from '../../../component/Common/buttonComp/ButtonComp'

function Login() {
  const heading = 'Sign up'
  const navigate = useNavigate()

  // ------- state for inputs ----- 

  const [input, setinput] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  })

// -------- navigate handler ------ 

  const navigationHandler = () => {
    navigate('/login')
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
                  Already have an account ?
                  <NavLink to='/login'>
                    <span className='font-green fontWeight-700'> Sign in </span>
                  </NavLink>
                </p>
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                  Username
                </label>
                <LoginInput
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter your Username'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />

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

export default Login
