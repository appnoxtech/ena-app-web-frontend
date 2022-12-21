import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Routing from './component/routing/Routing'
library.add(faPlus, faMinus, faTrash);


const App = () => {
  return (
    <>
      <div className='main_screen'>
        <Routing /> 
        {/* <Checkout /> */}
      </div>
    </>
  )
}
export default App
