import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../../Screens/Home'

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/product/details' element={<Details />} /> */}
         
           
            <Route path='*' element={<h1>Error 404 ! Page note Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
