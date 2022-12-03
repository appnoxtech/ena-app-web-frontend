import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Backpng from '../../../Assets/Images/back.png';
import Banner from '../Banner';
import Backimg from '../Common/Backimg';
import '../index.css';



function OtpVar() {
  const history = useNavigate();


  // for otp box 

  const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element:any, index:any) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

  return (
    <div className='d-flex justify-content-center mx-auto boody'>
    <div className='container main mx-2 p-0'>
      <div className='row'>
        <Banner/>
          <div className='col-8 p-4 form' style={{ width: 'fit-content' }}>
            <form>
              <Backimg />
              <div className='inputs'>
              <p className='heading'>OTP Verification</p>
              <p className='subheading'>
                Enter the verification code we just sent on your email <br /> address.
              </p>
              <div className='text-center'>
              {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength={1}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                    </div>
                <div className="d-grid">
                  <NavLink to="/otpVerified"><button type="button" className="btn btn-success btn-block button">Verify</button></NavLink>
                </div>
              </div>
            </form>
          </div>
          </div>
          </div>
          </div>
       
  )
}

export default OtpVar;