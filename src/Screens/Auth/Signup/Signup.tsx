import React from 'react'
import Navbar from '../../../Component/navbar/NavBar'
import '../index.css'
import banner from '../../../Assets/Images/bannerH.png'
import bannerforphone from '../../../Assets/Images/banner.png'
import { IoIosArrowBack } from 'react-icons/all'
import LoginInput from '../../../Component/Common/loginInput'
import { NavLink, useNavigate } from 'react-router-dom'
import DesktopFooter from '../../../Component/footer/Footer'

function Login() {
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
                <p className='heading mt-1'>Sign up</p>
                <p className='subheading'>
                  Already have an account ?
                  <NavLink to='/login'>
                    <span className='sign'> Sign in </span>
                  </NavLink>
                </p>
                <label className='form-label lable'>Username</label>
                <LoginInput
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Enter your Username'
                />
                <label className='form-label mt-3 lable'>Email</label>
                <LoginInput type='email' name='email' id='email' placeholder='Enter your email' />
                <label className='form-label mt-3 lable'>Password</label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                />
                <label className='form-label mt-3 lable'>Confirm Password</label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Confirm your password'
                />
                <NavLink to='/forget_password'>
                  <div className='text-end forget_pass'>Forget Password?</div>
                </NavLink>
                <NavLink to='/login'>
                  <button type='button' className='btn w-100 h-100 mt-4 button'>
                    Login
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

export default Login
