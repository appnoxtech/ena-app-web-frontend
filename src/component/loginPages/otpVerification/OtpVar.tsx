import React from 'react';
import Backpng from '../../../assets/images/back.png';
import './OtpVar.css';

function OtpVar() {
  return (
          <div className='col-8 p-4' style={{ width: 'fit-content' }}>
            <form>
              <img className='backimg' src={Backpng} alt='backpng' width='41px' height='41px' />
              <div className='inputs'>
              <p className='heading'>OTP Verification</p>
              <p className='subheading'>
                Enter the verification code we just sent on your email <br /> address.
              </p>
                <div className="d-grid">
                  <button type="button" className="btn btn-success btn-block button">Verify</button>
                </div>
              </div>
            </form>
          </div>
       
  )
}

export default OtpVar;