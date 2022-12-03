import React from 'react'
import './OtpVerified.css'
import verifyImg from '../../../Assets/Images/Rectangle.png'

function Passchanged() {
  return (
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
            <button type='button' className='btn btn-success btn-block button'>
              Back to Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Passchanged
