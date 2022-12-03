import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar2 from './Component/Navbar/NavBar'
import Searchbar from './Component/Searchbar/Searchbar'
import Category from './Component/Categorybar/Category'
import Card from './Component/Common/Card/Card'
import Home from './Screens/Home'
import DesktopFooter from './Component/DsFooter/DesktopFooter'



// importing login screens 
import Login from './Screens/Auth/Login/Login';
import Logincart from './Screens/Auth/Logincart/Logincart';
import ForgetPass from './Screens/Auth/ForgetPass/ForgetPass';
import OtpVerified from './Screens/Auth/OtpVerified/Otpverified';
import OtpVar from './Screens/Auth/Otp/OtpVar';
import Signup from './Screens/Auth/Signup/Signup';



const App = () => {
  return (
    <>
      <div className='main_screen'>
        {/* <Login /> */}
        {/* <SignIn /> */}
        {/* <Navbar2 /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logincart' element={<Logincart />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetPassword' element={<ForgetPass />} />
            <Route path='/otp' element={<OtpVar />} />
            <Route path='/otpVerified' element={<OtpVerified />} />
          </Routes>
        </BrowserRouter>
        {/* <DesktopFooter /> */}
      </div>
    </>
  )
}
export default App;
