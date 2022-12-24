import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import Details from '../../pages/product/Details'
import ForgetPass from '../../Screens/auth/forgetPass/ForgetPass'
import Login from '../../Screens/auth/login/Login'
import Logincart from '../../Screens/auth/logincart/Logincart'
import OtpVar from '../../Screens/auth/otpVar/OtpVar'
import Home from '../../Screens/home'
import OtpVerified from '../../Screens/auth/otpVerified/Otpverified'
import Signup from '../../Screens/auth/signup/Signup'
import AddAddressComp from '../common-components/addAddressComp/AddAddressComp'
import AddAddress from '../../Screens/checkout/addAddress/AddAddress'
import OrderCard from '../common-components/orderCard/OrderCard'
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
import ResetPass from '../../Screens/auth/resetPass/ResetPass'
import OtpVarForForget from '../../Screens/auth/otpVarforForget/OtpVarforForget'
import OrderSuccess from '../../Screens/checkout/OrderSuccess/OrderSuccess'
import OrderDetails from '../order/OrderDetails'
import { useGetUserType } from '../../hooks/user/getUserType'
import UserRoutes from '../../Routes/userRoutes'
import AdminRoutes from '../../Routes/AdminRoutes'

function Routing() {
  const userType = useGetUserType();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{marginTop:"140px"}}></div>
          {
            userType === 'customer' ? <UserRoutes /> : userType === 'admin' ? <AdminRoutes /> : null
          }
        <DesktopFooter class='container-fluid footer mt-5' />
      </BrowserRouter>
    </>
  )
}

export default Routing
