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
import Login from './Screens/Auth/Login/Login';



// importing login screens 
import SignIn from './Screens/Auth';
import ForgetPass from './Screens/Auth/ForgetPass/ForgetPass';


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
            <Route path='/login' element={<SignIn />} />
            <Route path='/Signin' element={<Login />} />
          </Routes>
        </BrowserRouter>
        {/* <DesktopFooter /> */}
      </div>
    </>
  )
}
export default App;
