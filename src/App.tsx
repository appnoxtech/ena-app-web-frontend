import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './component/routing/Routing';
import { useDispatch } from 'react-redux';
import NotificationProvider from './context/Notification/NotificationProvider';
library.add(faPlus, faMinus, faTrash);



const App = () => {

  return (
    <NotificationProvider>
      <div className='main_screen'>
        <Routing /> 
      </div>
    </NotificationProvider>
  )
}
export default App
