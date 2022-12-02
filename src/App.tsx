import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './pages/Route/Navigation'
import Navbar from './component/navbar/NavBar'
import Searchbar from './component/searchbar/Searchbar'
import Category from './component/categorybar/Category'
import Card from './component/card/Card'
import Home from './component/Home'
import DesktopFooter from './component/desktopFooter/DesktopFooter'
import Login from './component/loginPages/loginwithitemtocart/Loginwithitemincart';
import SignIn from './component/loginPages';


const App = () => {
  return (
    <>
      <div className='main_screen'>
        {/* <Login /> */}
        <SignIn />
        {/* <Navbar /> */}
        <BrowserRouter>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
        {/* <DesktopFooter /> */}
      </div>
    </>
  )
}
export default App
