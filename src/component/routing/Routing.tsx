import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Details from '../../pages/product/Details'
import ForgetPass from '../../Screens/auth/forgetPass/ForgetPass'
import Login from '../../Screens/auth/login/Login'
import Logincart from '../../Screens/auth/logincart/Logincart'
import OtpVar from '../../Screens/auth/otpVar/OtpVar'
import Home from '../../Screens/home'
import OtpVerified from "../../Screens/auth/otpVerified/Otpverified"
import Signup from "../../Screens/auth/signup/Signup"
import AddAddressComp from "../Common/addAddressComp/AddAddressComp"
import AddAddress from '../../Screens/checkout/addAddress/AddAddress'
import OrderCard from '../Common/orderCard/OrderCard'
import CheckoutWaddress from '../../Screens/checkout/checkoutWithAddAddress/CheckoutWaddress'
import Order from '../order/Order'
import DesktopFooter from '../footer/Footer'
import Navbar from '../navbar/NavBar'
import Checkout from '../../Screens/checkout/checkout/Checkout'
import ChangeAddress from '../../Screens/checkout/changeAddress/ChangeAddress'
import Admin from '../../Screens/admin'
import AdminLogin from '../../Screens/admin/adminLogin/AdminLogin'
import AdminHome from '../../Screens/admin/adminHome/AdminHome'
import AdminProductList from '../../Screens/admin/productl-list/productList'
import AddProduct from '../../Screens/addProduct/AddProduct'

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
            <Route path='/addAddress' element={<AddAddress />} />
            <Route path='/changeAddress' element={<ChangeAddress />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkoutWaddress' element={<CheckoutWaddress />} />
          
            <Route path='/order' element={<Order />} />


            {/* Admin */}
            <Route path='/admin' element={<Admin />}/>
            <Route path='/admin-login' element={<AdminLogin />}/>
            <Route path='/admin-home' element={<AdminHome />}/>
            <Route path = '/admin-ProductList' element = {<AdminProductList />} />
            <Route path = '/admin-AddProduct' element = {<AddProduct />} />
  
            {/* AdminEnd */}


            <Route path='*' element={<div className='col-12  d-flex'>
              <img src='/4041.png' className='img-fluid col-10 col-md-4  m-auto'/>
              </div>} />
        </Routes>
        <DesktopFooter class='container-fluid footer mt-5' />
      </BrowserRouter>
    </>
  )
}

export default Routing
