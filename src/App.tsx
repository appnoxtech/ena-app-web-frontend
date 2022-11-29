import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './pages/Route/Navigation'
import Navbar from './component/navbar/NavBar'
import Searchbar from './component/searchbar/Searchbar'
import Category from './component/categorybar/Category'
import Card from './component/card/Card'
const App = () => {
  return (
    <>
      <div className='main_screen bg-grey'>
        <Navbar />
        <Searchbar />
        <div className='cardOuter d-flex '>
          <div className='side-Part rounded-4 bg-white'>
            <Category />  
          </div>
          <div className='right-part bg-primary '>
            <div className='row d-flex align-items-center justify-content-between px-5 bg-white py-2 '>
              {Array.from({length:12}).map(()=>(
                <div className="col-3 my-2" key={1}>
                  <Card />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
