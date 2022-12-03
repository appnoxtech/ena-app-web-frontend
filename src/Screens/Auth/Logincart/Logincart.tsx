import React from 'react'
import LoginBanner from '../../../Assets/Images/Frame11209.png';
import Backpng from '../../../Assets/Images/back.png';
import '../index.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Banner from '../Banner';
import Backimg from '../Common/Backimg';

function Login() {
  const history = useNavigate();
  return (
<div className='row col-12 mt-4'>
          <div className='col-12 bg-dabger col-md-4'>
          <Banner />
          </div>
          <div className='col-12 col-md-6'>
            <form className=''>
              <Backimg />
              <div className='inputs'>
              <p className='heading'>Sign in to continue</p>
              <p className='subheading'>
                Don't have a account ?<NavLink to='/signup'><span className='sign'> Sign up </span></NavLink>
              </p>
              <div className="mb-3 mt-3">
                <label className="form-label lable">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" name="email" />
              </div>
                <div className="mb-3 mt-3">
                  <label className="form-label lable">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter Your Password" name="email" />
                </div>
                <NavLink to='/forgetPassword' className="forget_pass">
                  Forget Password?
                </NavLink>
                <div className="col-12">
                  <button type="button" className="btn btn-success w-100">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Login
