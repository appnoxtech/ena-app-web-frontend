import React from 'react'
import '../index.css'
import verifyImg from '../../../Assets/Images/114809-success.gif'
import Banner from '../Banner'
import { NavLink } from 'react-router-dom'

function Passchanged() {
  return (
    <div className='d-flex justify-content-center mx-auto boody'>
    <div className='container main mx-2 p-0'>
      <div className='row'>
        <Banner />
    <div
      className='col-8 p-4'
      style={{
        width: 'fit-content',
        border: '1px solid black',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <form>
        <div className='inputs'>
          <img src={verifyImg} alt='verifyImg' width='20%' />
          <p className='heading'>Password Changed</p>
          <p className='subheading'>
            Password has been changed <br />
            successfully.
          </p>
          <div className='d-grid'>
            <NavLink to="/login"> 
            <button type='button' className='btn btn-success btn-block button'>
              Back to Login
            </button>
            </NavLink>
          </div>
        </div>
      </form>
    </div>
    </div></div></div>
  )
}

export default Passchanged;
