import React from 'react';
import LoginBanner from '../../../assets/images/Frame11209.png';
import Backpng from '../../../assets/images/back.png';
import './Loginwithitemincart.css';

function Login() {
  return (
          <div className='col-8 p-4' style={{ width: 'fit-content' }}>
            <form>
              <img className='backimg' src={Backpng} alt='backpng' width='41px' height='41px' />
              <div className='inputs'>
              <p className='heading'>Sign in to continue</p>
              <p className='subheading'>
                Don't have a account ?<span className='sign'> Sign up </span>
              </p>
              <div className="mb-3 mt-3">
                <label className="form-label lable">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email" />
              </div>
                <div className="mb-3 mt-3">
                  <label className="form-label lable">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your Password" name="email" />
                </div>
                <p
                  style={{
                    fontWeight: '500',
                    fontSize: '14px',
                    textAlign: 'right',
                    color: '#51BC4A',
                    marginTop:"10px"
                  }}
                >
                  Forget Password?
                </p>
                <div className="d-grid">
                  <button type="button" className="btn btn-success btn-block button">Login</button>
                </div>
              </div>
            </form>
          </div>
       
  )
}

export default Login;