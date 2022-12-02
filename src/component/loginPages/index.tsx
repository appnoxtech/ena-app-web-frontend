import React from 'react';
import LoginBanner from '../../assets/images/Frame11209.png';
import Backpng from '../../assets/images/back.png';
import './index.css';
import Login from './loginwithitemtocart/Loginwithitemincart';
import Forget from './forgetPassword/Forget';
import Passchanged from './finalforgetpass/Passchanged';
import OtpVar from './otpVerification/OtpVar';
import Signup from './signup/Signup';

function SignIn() {
  return (
    <div className='d-flex justify-content-center mx-auto boody'>
      <div className='container main'>
        <div className='row'>
          <div className='col-4'>
            <img src={LoginBanner} alt='LoginBanner' width='332' height='658' />
          </div>
         {/* <Login /> */}
         {/* <Forget /> */}
         {/* <Passchanged /> */}
         {/* <OtpVar /> */}
         <Signup />
        </div>
      </div>
    </div>
  )
}

export default SignIn;