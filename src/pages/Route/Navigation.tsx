import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Coustomer from '../Customer/Coustomer'

function Navigation() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Coustomer />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Navigation
