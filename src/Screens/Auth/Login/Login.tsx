import React from 'react';
import LoginBanner from '../../../Assets/Images/Frame11209.png';
import Backpng from '../../../Assets/Images/back.png';
import './Login.css';

function Login() {
  return (
    <div className='d-flex justify-content-center mx-auto boody'>
      <div className='container main'>
        <div className='row'>
          <div className='col-4 text-center'>
            <img className='img-responsive' src={LoginBanner} alt='LoginBanner' width='332' height='658'/>
          </div>
          <div className='col-8 p-4' style={{ width: 'fit-content' }}>
            <form>
              <img className='backimg' src={Backpng} alt='backpng' width='41px' height='41px' />
              <div className='inputs'>
              <p className='heading'>Sign in</p>
              <p className='subheading'>
                Don't have a account ?<span className='sign'> Sign up </span>
              </p>
              <div className="mb-3 mt-3">
                <label className="form-label lable">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email" />
              </div>
                {/* <p className='lable'>Email</p>
                <input type='email' className='email' placeholder='Enter Your Email' /> */}
                <div className="mb-3 mt-3">
                  <label className="form-label lable">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your Password" name="email" />
                </div>
                {/* <p className='lable' style={{ marginTop: '20px' }}>
                  Password
                </p>
                <input type='password' placeholder='Enter Your Password' /> */}
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
                {/* <div className='d-grid gap-2'>
                  <button className='btn btn-success button' type='button'>
                    Login
                  </button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;