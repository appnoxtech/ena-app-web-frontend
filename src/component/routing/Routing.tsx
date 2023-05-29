import React, { useEffect, useState } from 'react'
import { BrowserRouter} from 'react-router-dom'
import DesktopFooter from '../footer/Footer'
import Navbar from '../navbar/NavBar'
import UserRoutes from '../../Routes/userRoutes'
import AdminRoutes from '../../Routes/AdminRoutes'
import { useSelector } from 'react-redux'
import './Routing.css';
import AgentsRoutes from '../../Routes/AgentsRoutes'

function Routing() {
  const UserType = useSelector((state: any) => state.user.userType);
  const [userType, setUserType] = useState(UserType);
  useEffect(() => {
    setUserType(UserType);
  }, [UserType]);
  console.log('userType', UserType);
  
  return (
    <>
      <BrowserRouter>
       <div className="col-12 containe">
       <Navbar />
        <div className='height'></div>
          {
            userType === 'customer' ? 
              <UserRoutes /> 
              : userType === 'admin' ? 
              <AdminRoutes /> 
              : userType === 'driver' ?
              <AgentsRoutes />
              :null
          }
          <div className="mb-3"></div>
        {/* <DesktopFooter class='container-fluid footer mt-5 mt-auto' /> */}
       </div>
      </BrowserRouter>
    </>
  )
}

export default Routing
