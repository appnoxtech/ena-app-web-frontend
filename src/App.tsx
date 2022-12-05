import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/NavBar'
import Home from './Screens/Home'
import Details from './pages/product/Details'
import Footer from './component/footer/Footer'
import Login from './Screens/Auth/Login/Login'
import Logincart from './Screens/Auth/Logincart/Logincart'
import ForgetPass from './Screens/Auth/ForgetPass/ForgetPass'
import OtpVar from './Screens/Auth/otpVar/OtpVar'
import OtpVerified from './Screens/Auth/OtpVerified/Otpverified'
import Signup from './Screens/Auth/Signup/Signup'



const App = () => {
  return (
    <>
      <div className='main_screen'>
        <BrowserRouter>
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App
