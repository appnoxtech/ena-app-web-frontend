import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/all';
import banner from '../../assets/images/bannerH.png';
import EnaLogo from '../../assets/images/enaLogoGreen.png';
import Modal from 'react-bootstrap/Modal';
import LoginInput from '../../component/common-components/loginInput';
import { useSignupHook } from '../../hooks/authHooks/SignupHook';
import ButtonComp from '../../component/common-components/buttonComp/ButtonComp';
import './AddRiderForm.css';
import '../../assets/global/global.css';
import { AddRiderService, UpdateRiderService } from '../../services/rider/RiderService';
import { notification } from 'antd';
import useErrorHandler from '../../services/handler/ErrorHandler';

function AddRiderForm(props) {
    const [api, contextHolder] = notification.useNotification();
    const [isUpdate, setIsUpdate] = useState(false);
    const showError = useErrorHandler();
    const heading = isUpdate ? 'Update Rider' : 'Add Rider';
    const navigate = useNavigate()
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_password: ''
    }
    const localErrorState = {
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        passwordError: '',
        confirm_password: '',
    }

    const [localError, setlocalError] = useState(localErrorState)

    // ------- state for inputs -----

    const [input, setinput] = useState(initialState)


    const { firstName, lastName, email, password } = input
    const user = { firstName, lastName, email, password }


    const handleAddAgent = async () => {
        try {
            const req = await AddRiderService(user);
            await props.getRiderList();
            openNotification('Agent Added Successfully !');
            props.onHide();
        } catch (error) {
            //openNotification(error.message);
            showError(error);
        }
    }

    const handleUpdateAgent = async () => {
        try {
            const { firstName, lastName, email } = input;
            const req = await UpdateRiderService({ _id: input._id, firstName, lastName, email });
            await props.getRiderList();
            openNotification('Agent Updated Successfully !');
            props.onHide();
        } catch (error) {
            openNotification(error.message);
        }
    }

    const agentInfo = () => {
        if (Object.keys(props.selectedAgent).length > 0) {
            setinput(props.selectedAgent)
            setIsUpdate(true);
        } else {
            setinput(initialState);
            setIsUpdate(false);
        }
    }

    useEffect(() => {
        agentInfo();
        return () => {
            setlocalError(localErrorState);
        }
    }, [props.selectedAgent])


    const checkValidation = () => {
        if (input.firstName != '') {
            setlocalError({ ...localErrorState, firstNameError: '' })
            if (input.lastName != '') {
                setlocalError({ ...localErrorState, lastNameError: '' })
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
                    setlocalError({ ...localErrorState, emailError: '' })
                    if (!isUpdate) {
                        if (input.password.length === 0) {
                            setlocalError({ ...localErrorState, passwordError: 'Required !' })
                            return false;
                        } else if (input.password.length < 8) {
                            setlocalError({ ...localErrorState, passwordError: 'Password must be of 8 digits !' })
                            return false;
                        } else {
                            setlocalError({ ...localErrorState, passwordError: '' })
                            if (input.confirm_password.length === 0) {
                                setlocalError({ ...localErrorState, confirm_password: 'Required !' });
                                return false;
                            }
                            else if (input.password !== input.confirm_password) {
                                setlocalError({ ...localErrorState, confirm_password: 'Password not matched !' })
                                return false
                            } else {
                                setlocalError({ ...localErrorState, confirm_password: '' })
                                return true
                            }
                        }
                    } else {
                        return true;
                    }
                } else {
                    setlocalError({ ...localErrorState, emailError: 'Wrong Email' })
                    return false
                }
            } else {
                setlocalError({ ...localErrorState, lastNameError: 'Required field' })
                return false
            }
        } else {
            setlocalError({ ...localErrorState, firstNameError: 'Required field' })
            return false
        }
    }


    // -------- navigate handler ------

    const navigationHandler = () => {
        if (checkValidation()) {
            handleAddAgent();
        }

    }

    // -------- validation goes here ---------

    // --------- validation Ends here ---------

    const openNotification = (message) => {
        api.info({
            message: `Notification`,
            description: message,
            placement: 'topLeft',
        });
    };

    const updateRider = () => {
        if (checkValidation()) {
            handleUpdateAgent()
        } else {
            console.log(localError);
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {contextHolder}
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body style={{ overFlow: 'auto' }}>
                <>
                    <div className='container-fluid mb-3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='col-10 mx-auto mt-3 pt-0'>
                                        <p className='mt-1 h3 fontWeight-700'>{heading}</p>
                                        <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                                            First Name
                                        </label>
                                        <LoginInput
                                            type='text'
                                            name='firstName'
                                            id='firstName'
                                            placeholder='Enter your firstName'
                                            class='form-control mt-3'
                                            Input={input}
                                            setInput={setinput}
                                        />
                                        {localError.firstNameError == '' ? null : (
                                            <p className='text-danger'>{localError.firstNameError}</p>
                                        )}
                                        <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                                            Last Name
                                        </label>
                                        <LoginInput
                                            type='text'
                                            name='lastName'
                                            id='lastName'
                                            placeholder='Enter your lastName'
                                            class='form-control mt-3'
                                            Input={input}
                                            setInput={setinput}
                                        />
                                        {localError.lastNameError == '' ? null : (
                                            <p className='text-danger'>{localError.lastNameError}</p>
                                        )}

                                        <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
                                            Email
                                        </label>
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
                                        {
                                            !isUpdate ?
                                                <>
                                                    <label className='form-label lable mt-3 h6 d-none d-lg-block d-md-block'>
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
                                                        <p className='text-danger'>{localError.passwordError}</p>
                                                    )}
                                                    <label className='form-label mt-3 h6 d-none d-lg-block d-md-block lable'>
                                                        Confirm Password
                                                    </label>
                                                    <LoginInput
                                                        type='password'
                                                        name='confirm_password'
                                                        id='confirm_password'
                                                        placeholder='Confirm your password'
                                                        class='form-control mt-3'
                                                        Input={input}
                                                        setInput={setinput}
                                                    />
                                                    {localError.confirm_password == '' ? null : (
                                                        <p className='text-danger'>{localError.confirm_password}</p>
                                                    )}
                                                </> : null
                                        }

                                        {
                                            isUpdate ?
                                                <ButtonComp
                                                    navigationHandler={updateRider}
                                                    type='button'
                                                    class='btn w-100 h-100 mt-4 fontWeight-600 button1'
                                                    btvalue='Update Rider'
                                                /> : <ButtonComp
                                                    navigationHandler={navigationHandler}
                                                    type='button'
                                                    class='btn w-100 h-100 mt-4 fontWeight-600 button1'
                                                    btvalue='Add Rider'
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Modal.Body>
        </Modal>
    );
}

export default AddRiderForm