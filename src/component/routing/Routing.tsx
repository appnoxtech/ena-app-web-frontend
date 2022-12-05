import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Screens/Auth/Login/Login'
import Logincart from '../../Screens/Auth/Logincart/Logincart'
import ForgetPass from '../../Screens/Auth/ForgetPass/ForgetPass'
import Home from '../../Screens/Home'
import OtpVar from '../../Screens/Auth/otpVar/OtpVar'
import OtpVerified from '../../Screens/Auth/OtpVerified/Otpverified'
import Signup from '../../Screens/Auth/Signup/Signup'

function Navigations() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart_login' element={<Logincart />} />
          <Route path='/forget_password' element={<ForgetPass />} />
          <Route path='/otp_verification' element={<OtpVar />} />
          <Route path='/otp_verified' element={<OtpVerified />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigations
