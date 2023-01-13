import React, { useContext, useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ButtonComp from "../../../component/common-components/buttonComp/ButtonComp";
import { ChangePasswordService } from "../../../services/user/UserService";
import useErrorHandler from "../../../services/handler/ErrorHandler";
import NotificationContext from "../../../context/Notification/NotificationContext";
import '../../../assets/global/global.css';

const PassErrorInitial = {
    password: '',
    newPassword: '',
}
const initialState = {
    password: '',
    newPassword: '',
}

const PasswordTab = () => {
    const Notification = useContext(NotificationContext);
    const showError = useErrorHandler();
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [updatePassword, setUpdatePassword] = useState(initialState);
    const [PasswordError, setPasswordError] = useState(PassErrorInitial);
   
    const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
    
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const HandleChangePassword = async () => {
        try {
            const data = {
                oldPassword: updatePassword.password,
                newPassword: updatePassword.newPassword,
            }
            const res = await ChangePasswordService(data);
            if (res.status === 200) {
                Notification({
                    title: 'Authentication',
                    description: 'Password Changed Successfully !',
                    type: 'success'
                });
                setUpdatePassword(initialState);

            }

        } catch (error) {
            console.log('Error', error);
            showError(error);
        }
    }

    const PasswordChangeHandler = (e) => {
        const { name, value } = e.target;
        setUpdatePassword({
            ...updatePassword,
            [name]: value,
        });
    }

    const handleChangePassword = () => {

        if (updatePassword.password.length === 0) {
            return setPasswordError({
                ...PasswordError,
                password: 'Required !'
            });
        } else if (updatePassword.password.length < 8) {
            return setPasswordError({
                ...PasswordError,
                password: 'Password length must be greater than 8 digit !'
            });
        } else {
            if (updatePassword.newPassword.length === 0) {
                return setPasswordError({
                    ...PasswordError,
                    password: '',
                    newPassword: 'Required !'
                });
            } else if (updatePassword.newPassword.length < 8) {
                return setPasswordError({
                    ...PasswordError,
                    password: '',
                    newPassword: 'Password length must be greater than 8 digit !'
                });
            } else {
                setPasswordError(PassErrorInitial);
                HandleChangePassword();
            }
        }
    }


    return ( 
        <div className="col-12 d-flex">
                    <div className="col-12 col-md-10 mx-auto">
                        <div className="my-3">
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showOldPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowOldPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    name='password'
                                    value={updatePassword.password}
                                    onChange={PasswordChangeHandler}
                                />
                            </FormControl>
                            {PasswordError.password == '' ? null : (
                                <p className='text-danger mt-1'>{PasswordError.password}</p>
                            )}
                        </div>
                        <div className="my-3">
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showNewPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowNewPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="New Password"
                                    name='newPassword'
                                    value={updatePassword.newPassword}
                                    onChange={PasswordChangeHandler}
                                />
                            </FormControl>
                            {PasswordError.newPassword == '' ? null : (
                                <p className='text-danger mt-1'>{PasswordError.newPassword}</p>
                            )}
                        </div>
                        <ButtonComp
                            navigationHandler={handleChangePassword}
                            type='button'
                            class=' btnRadius border border-0 w-100 mt-4 fontWeight-600 button themecolor text-light py-2 '
                            btvalue='Change Password'
                        />

                    </div>
                </div>
     );
}
 
export default PasswordTab;