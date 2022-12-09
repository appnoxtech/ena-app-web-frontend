import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './component/routing/Routing'
import Checkout from './Screens/checkout/checkout/Checkout'

const App = () => {
  return (
    <>
      <div className='main_screen'>
        {/* <Routing /> */} <Checkout />
      </div>
    </>
  )
}
export default App
