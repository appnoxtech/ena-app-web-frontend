import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Backpng from '../../../Assets/Images/back.png';
import Banner from '../Banner';
import Backimg from '../Common/Backimg';
import './Signup.css'

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
        <p className='heading'>Sign up</p>
        <p className='subheading'>
          Already have an account ?<NavLink to='/signup'><span className='sign'> Sign in </span></NavLink>
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
          <div className='text-end'>
          <NavLink to='/forgetPassword' className="forget_pass">
            Forget Password?
          </NavLink>
          </div>
          <div className="col-12 mt-3">
            <button type="button" className="btn btn-success w-100">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;