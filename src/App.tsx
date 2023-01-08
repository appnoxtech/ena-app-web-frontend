import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './component/routing/Routing';
import NotificationProvider from './context/Notification/NotificationProvider';



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
