import React from 'react';
import Backpng from '../../../Assets/Images/back.png';
import './Signup.css';

function Login() {
  return (
          <div className='col-8 p-4' style={{ width: 'fit-content' }}>
            <form>
              <img className='backimg' src={Backpng} alt='backpng' width='31px' height='31px' />
              <div className='inputs'>
              <p className='heading'>Sign up</p>
              <p className='subheading'>
                Already have an account ?<span className='sign'> Sign in </span>
              </p>
              <div className="mb-3 mt-3">
                <label className="form-label lable">Username</label>
                <input type="text" className="form-control" id="email" placeholder="Enter your name" name="email" />
              </div>
              <div className="mb-3 mt-1">
                <label className="form-label lable">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" />
              </div>
                <div className="mb-3 mt-1">
                  <label className="form-label lable">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your password" name="email" />
                </div>
                <div className="mb-3 mt-1">
                  <label className="form-label lable">Confirm Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your password" name="email" />
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