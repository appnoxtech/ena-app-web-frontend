import React, { Component, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginHook } from '../../../hooks/authHooks/LoginHook';
import ButtonComp from '../buttonComp/ButtonComp';
import LoginInput from '../loginInput';

const LoginModal: React.FC<any> = (props) => {
    const localErrorState = { emailError: '', passwordError: '' }
    const handleLogin = useLoginHook()
    const [input, setinput] = useState({
      email: '',
      password: '',
    })
    const heading = 'Sign in';
      // --------- validation goes here -----

  const [localError, setlocalError] = useState(localErrorState)

  const checkValidation = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      setlocalError({ ...localErrorState, emailError: '' })
      if (input.password.length >= 8) {
        setlocalError({
          ...localErrorState,
          passwordError: '',
        })
        return true
      } else {
        setlocalError({
          ...localErrorState,
          passwordError: 'please enter 8 digits',
        })
        return false
      }
    } else {
      setlocalError({ ...localErrorState, emailError: 'Email is not valid' })
      return false
    }
  }

  // -------- validation Ends -----------

  const navigationHandler = () => {
    if (checkValidation()) {
      handleLogin(input, '/checkoutWaddress')
    }
  }

  // -------- navigate handler ------
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='mb-3'>
      <div className='col-10 mx-auto pt-0 mt-3'>
                <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                <p className='h6'>
                  Don't have a account ?
                  <NavLink to='/signup'>
                    <span className='font-green fontWeight-700'> Sign up </span>
                  </NavLink>
                </p>
                <label className='form-label mt-3 h6 d-none d-lg-block d-md-block'>Email</label>
                <LoginInput
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your email'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />
                {localError.emailError == '' ? null : (
                  <p className='text-danger'>{localError.emailError}</p>
                )}

                <label className='form-label mt-3 h6 h3 d-none d-lg-block d-md-block'>
                  Password
                </label>
                <LoginInput
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter your password'
                  class='form-control mt-3'
                  Input={input}
                  setInput={setinput}
                />

                {localError.passwordError == '' ? null : (
                  <p className='text-danger mt-1'>{localError.passwordError}</p>
                )}

                <NavLink to='/forget_password'>
                  <div className='text-end h6 mt-2 font-green'>Forget Password?</div>
                </NavLink>
                <ButtonComp
                  navigationHandler={navigationHandler}
                  type='button'
                  class=' btnRadius border border-0 w-100 h-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                  btvalue='Login'
                />
              </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;