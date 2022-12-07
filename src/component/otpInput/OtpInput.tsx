import React, { useState } from 'react';
import './OtpInput.css'

function OtpInput(){
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

  return(
    <>
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
    </>
  )
}

export default OtpInput;