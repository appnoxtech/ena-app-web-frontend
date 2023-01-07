import { Route, Routes } from "react-router-dom";
import React from "react";
import Details from "../pages/product/Details"
import Cart from "../pages/cart/Cart"
import Login from "../Screens/auth/login/Login"
import Passchanged from "../Screens/auth/otpVerified/Otpverified";
import Logincart from "../Screens/auth/logincart/Logincart"
import ForgetPass from "../Screens/auth/forgetPass/ForgetPass"
import OtpVar from "../Screens/auth/otpVar/OtpVar"
import OtpVarForForget from "../Screens/auth/otpVarforForget/OtpVarforForget"
import ResetPass from "../Screens/auth/resetPass/ResetPass"
import Signup from "../Screens/auth/signup/Signup"
import AddAddress from "../component/common-components/addAddressComp/AddAddressComp"
import Checkout from "../Screens/checkout/checkout/Checkout"
import OrderSuccess from "../Screens/checkout/OrderSuccess/OrderSuccess"
import Order from "../component/order/Order"
import OrderDetails from "../component/order/OrderDetails"
import CheckoutWaddress from "../Screens/checkout/checkoutWithAddAddress/CheckoutWaddress"
import Admin from "../Screens/home";

const UserRoutes = () => {
    return (
        <Routes>
          <Route path='/' element={<Admin />} />
          <Route path='/product/details' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart_login' element={<Logincart />} />
          <Route path='/forget_password' element={<ForgetPass />} />
          <Route path='/otp_verification' element={<OtpVar />} />
          <Route path='/resetpass/otpvar' element={<OtpVarForForget />} />
          <Route path='/otp_verified' element={<Passchanged />} />
          <Route path='/resetPassword' element={<ResetPass />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/addAddress' element={<AddAddress />} />
          {/* <Route path='/changeAddress' element={<ChangeAddress />} /> */}
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orderSuccess' element={<OrderSuccess />} />
          <Route path='/checkoutWaddress' element={<CheckoutWaddress />} />
          <Route path='/order' element={<Order />} />
          <Route path='/orderDetails' element={<OrderDetails />} />
          <Route
            path='*'
            element={
              <div className='col-12  d-flex'>
                <img src='/4041.png' className='img-fluid col-10 col-md-4  m-auto' />
              </div>
            }
          />
        </Routes>
    )
}

export default UserRoutes;