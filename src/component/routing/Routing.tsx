import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Details from '../../pages/product/Details'
import ForgetPass from '../../Screens/Auth/ForgetPass/ForgetPass'
import Login from '../../Screens/Auth/Login/Login'
import Logincart from '../../Screens/Auth/Logincart/Logincart'
import OtpVar from '../../Screens/Auth/otpVar/OtpVar'
import Home from '../../Screens/Home'
import OtpVerified from "../../Screens/Auth/OtpVerified/Otpverified"
import Signup from "../../Screens/Auth/Signup/Signup"
import AddAddressComp from "../Common/addAddressComp/AddAddressComp"
import AddAddress from '../../Screens/checkout/addAddress/AddAddress'
import Order from '../order/Order'
import DesktopFooter from '../footer/Footer'
import Navbar from '../navbar/NavBar'

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
            <Route path='/order' element={<Order />} />
            <Route path='*' element={<h1>Error 404 ! Page note Found</h1>} />
        </Routes>
        <DesktopFooter class='container-fluid footer mt-5' />
      </BrowserRouter>
    </>
  )
}

export default Routing
