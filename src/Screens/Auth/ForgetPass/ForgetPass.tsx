import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Backpng from '../../../Assets/Images/back.png';
import Banner from '../Banner';
import Backimg from '../Common/Backimg';
import '../index.css';

function Forget() {
  const history = useNavigate();
  return (
    <div className='d-flex justify-content-center mx-auto boody'>
      <div className='container main mx-2 p-0'>
        <div className='row'>
          <Banner />
          <div className='col-8 p-4 form' style={{ width: 'fit-content' }}>
            <form>
              <Backimg />
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
                  <NavLink to="/otp"><button type="button" className="btn btn-success btn-block button">Send Code</button></NavLink>
                </div>
              </div>
            </form>
          </div>
          </div></div></div>
       
  )
}

export default Forget;