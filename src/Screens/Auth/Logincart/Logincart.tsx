import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/all'
import '../Auth.css'
import '../../../Assets/global/global.css'
import banner from '../../../Assets/Images/bannerH.png'
import bannerforphone from '../../../Assets/Images/banner.png'
import LoginInput from '../../../Component/Common/loginInput'
import Navbar from '../../../Component/navbar/NavBar'
import DesktopFooter from '../../../Component/footer/Footer'

function Logincart() {
  const heading = 'Sign in to continue'
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
                className='border mt-3 rounded-3 backicon d-none d-md-block d-lg-block'
                size={30}
                onClick={() => history(-1)}
              />
              <div className='col-10 mx-auto mt-0 pt-0'>
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>
                  Don't have a account ?
                  <NavLink to='/signup'>
                    <span className='font-green fontWeight-700'> Sign up </span>
                  </NavLink>
                </p>
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>Email</label>
                <LoginInput type='email' name='email' id='email' placeholder='Enter your email' />
                <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>Password</label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                />
                <NavLink to='/forget_password'>
                  <div className='text-end h6 mt-2 font-green'>Forget Password?</div>
                </NavLink>
                <button type='button' className='btn w-100 h-100 mt-4 fontWeight-600 button'>
                  Login
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

export default Logincart
