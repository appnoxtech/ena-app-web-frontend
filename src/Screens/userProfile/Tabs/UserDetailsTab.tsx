import React, { useState } from "react"
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/reducer/UserDetails/userAction';
import useErrorHandler from '../../../services/handler/ErrorHandler';
import NotificationContext from '../../../context/Notification/NotificationContext';
import { UpdateProfileService } from '../../../services/user/UserService';
import ButtonComp from '../../../component/common-components/buttonComp/ButtonComp';
import '../../../assets/global/global.css';


const userErrorInitial = {
    firstName: '',
    lastName: ''
}

const UserDetailsTab = ({user, isEdit, setIsEdit}) => {
    const dispatch = useDispatch();
    const showError = useErrorHandler();
    const Notification = React.useContext(NotificationContext);
    const [userData, setUserData] = useState(user);
   
    const [userError, setUserError] = React.useState(userErrorInitial);

    const handleUpdateProfile = async () => {
        try {
            const data = {
                _id: user.userId,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
            }
            const res = await UpdateProfileService(data);
            const updatedData = {
                ...user,
                ...data,
            }
            dispatch(updateUserData(updatedData));
            setIsEdit(false);
            Notification({
                title: 'Authentication',
                description: 'Profile Updated Successfully !',
                type: 'success'
            });
        } catch (error) {
            showError(error);
        }
    }

    const handleUpdateProfileClick = () => {
        if (userData.firstName.length <= 0) {
            setUserError({
                ...userError,
                firstName: 'Required !'
            })
        } else if (userData.lastName.length <= 0) {
            setUserError({
                ...userError,
                lastName: 'Required !'
            })
        } else {
            setUserError(userErrorInitial);
            handleUpdateProfile();
        }
    }

    const ProfileChangeHandler = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    return (
        <React.Fragment>
            {
                isEdit ? <div className="col-12 d-flex">
                    <div className="col-12 col-md-10 mx-auto">
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Firstname"
                                variant="outlined"
                                name='firstName'
                                value={userData.firstName}
                                onChange={ProfileChangeHandler}
                                fullWidth
                            />
                            {userError.firstName == '' ? null : (
                                <p className='text-danger mt-1'>{userError.firstName}</p>
                            )}
                        </div>
                        <div className="my-3">
                            <TextField
                                id="outlined-basic"
                                label="Lastname"
                                variant="outlined"
                                className='my-2'
                                name='lastName'
                                onChange={ProfileChangeHandler}
                                value={userData.lastName}
                                fullWidth
                            />
                            {userError.lastName == '' ? null : (
                                <p className='text-danger mt-1'>{userError.lastName}</p>
                            )}
                        </div>

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            name='email'
                            className='my-2'
                            disabled={true}
                            value={userData.email}
                            fullWidth
                        />

                        <ButtonComp
                            navigationHandler={handleUpdateProfileClick}
                            type='button'
                            class=' btnRadius border border-0 w-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                            btvalue='Update Profile'
                        />

                    </div>
                </div>
                    :
                    <div className="col-12 d-flex flex-column">
                        <div className="col-12 col-md-10 mx-auto d-flex">
                            <div className="col-6">
                                <h5 className='fs-7 fs-md-5  mb-2'>Firstname :</h5>
                                <h5 className='fs-7 fs-md-5 mb-2'>Lastname :</h5>
                                <h5 className='fs-7 fs-md-5 mb-2'>Email :</h5>
                            </div>
                            <div className="col-6">
                                <p className='fs-7 fs-md-5 mb-2 opacity-50'>{userData.firstName}</p>
                                <p className='fs-7 fs-md-5 mb-2 opacity-50'>{userData.lastName}</p>
                                <p className='fs-7 fs-md-5 mb-2 opacity-50 text-dots'>{userData.email}</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="col-10 mx-auto">
                                <ButtonComp
                                    navigationHandler={() => setIsEdit(true)}
                                    type='button'
                                    class=' btnRadius border border-0 w-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                                    btvalue='Edit'
                                />
                            </div>
                        </div>
                    </div>
            }

        </React.Fragment>

    );
}

export default UserDetailsTab;