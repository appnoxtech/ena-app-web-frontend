import React from 'react';
import LoginBanner from '../../Assets/Images/Frame11209.png';
import Backpng from '../../../Assets/Images/back.png';
import './index.css';
import Login from './Login/Login';
import Forget from './ForgetPass/ForgetPass';
import OtpVerified from './OtpVerified/Otpverified';
import OtpVar from './Otp/OtpVar';
import Signup from './Signup/Signup';

function SignIn() {
  return (
    <div className='d-flex justify-content-center mx-auto boody' style={{border:"1px solid black"}}>
      <div className='container main' style={{border:"1px solid black"}}>
        <div className='row'>
          <div className='col-4'>
            <img src={LoginBanner} alt='LoginBanner' width='332' height='658' />
          </div>
         {/* <Login /> */}
         {/* <Forget /> */}
         {/* <Passchanged /> */}
         {/* <Signup /> */}
         {/* <OtpVar /> */}
        </div>
      </div>
    </div>
  )
}

export default SignIn;