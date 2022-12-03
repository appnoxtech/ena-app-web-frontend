import React from 'react';
import Backpng from '../../../Assets/Images/back.png';
import './ForgetPass.css';

function Forget() {
  return (
          <div className='col-8 p-4' style={{ width: 'fit-content' }}>
            <form>
              <img className='backimg' src={Backpng} alt='backpng' width='41px' height='41px' />
              <div className='inputs'>
              <p className='heading'>Forget Password ?</p>
              <p className='subheading'>
                Don't worry! it occurs. Please enter the email address <br/>linked with your account.
              </p>
              <div className="mb-3 mt-3">
                <label className="form-label lable">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
              </div>
                <div className="d-grid">
                  <button type="button" className="btn btn-success btn-block button">Send Code</button>
                </div>
              </div>
            </form>
          </div>
       
  )
}

export default Forget;