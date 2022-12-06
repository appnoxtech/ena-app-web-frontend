import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from '../src/component/routing/Routing'
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
        <Routing />
      </div>
    </>
  )
}
export default App
