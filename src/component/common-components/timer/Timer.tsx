import React from 'react'
import { useState, useEffect } from 'react'

function Timer() {
  const [timer, setTimer] = useState(5)
  const [show, setShow] = useState(false)

  const handleResendOtp = () => {
    setInterval(() => {
      setTimer(timer - 1)
    }, 1000)
  }

  useEffect(() => {
    handleResendOtp()
  }, [])
  return (
    <>
      {show ? (
        <button className='text-center' onClick={handleResendOtp}>
          Resend OTP
        </button>
      ) : null}
      <p className='text-center'>{timer}</p>
    </>
  )
}

export default Timer
