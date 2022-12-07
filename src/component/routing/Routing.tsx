import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Screens/Auth/Login/Login'
import Logincart from '../../Screens/Auth/Logincart/Logincart'
import ForgetPass from '../../Screens/Auth/ForgetPass/ForgetPass'
import Home from '../../Screens/Home'
import OtpVar from '../../Screens/Auth/otpVar/OtpVar'
import OtpVerified from '../../Screens/Auth/OtpVerified/Otpverified'
import Signup from '../../Screens/Auth/Signup/Signup'
import Details from '../../pages/product/Details'
import Navbar from '../navbar/NavBar'
import DesktopFooter from '../footer/Footer'

function Routing() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/details' element={<Details />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart_login' element={<Logincart />} />
            <Route path='/forget_password' element={<ForgetPass />} />
            <Route path='/otp_verification' element={<OtpVar />} />
            <Route path='/otp_verified' element={<OtpVerified />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/checkout' element={<Signup />} />
            <Route path='*' element={<h1>Error 404 ! Page note Found</h1>} />
        </Routes>
        <DesktopFooter class='container-fluid footer mt-5 d-none d-lg-block d-md-block' />
      </BrowserRouter>
    </>
  )
}

export default Routing
