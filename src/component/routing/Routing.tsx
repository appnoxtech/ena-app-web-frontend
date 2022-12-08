import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Screens/auth/login/Login'
import Logincart from '../../Screens/auth/logincart/Logincart'
import ForgetPass from '../../Screens/auth/forgetPass/ForgetPass'
import Home from '../../Screens/home'
import OtpVar from '../../Screens/auth/otpVar/OtpVar'
import OtpVerified from '../../Screens/auth/otpVerified/Otpverified'
import Signup from '../../Screens/auth/signup/Signup'
import Details from '../../pages/product/Details'
import Navbar from '../navbar/NavBar'
import DesktopFooter from '../footer/Footer'
import AddAddressComp from '../common/addAddressComp/AddAddressComp'
import AddAddress from '../../Screens/checkout/addAddress/AddAddress'
import Cart from "../../Component/cart/CartCom"

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/details' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart_login' element={<Logincart />} />
            <Route path='/forget_password' element={<ForgetPass />} />
            <Route path='/otp_verification' element={<OtpVar />} />
            <Route path='/otp_verified' element={<OtpVerified />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/addAddressComp' element={<AddAddressComp />} />
            <Route path='/addAddress' element={<AddAddress />} />
            <Route path='*' element={<h1>Error 404 ! Page note Found</h1>} />
        </Routes>
        <DesktopFooter class='container-fluid footer mt-5 d-none d-lg-block d-md-block' />
      </BrowserRouter>
    </>
  )
}

export default Routing
