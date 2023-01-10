import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoginInput from '../../component/common-components/loginInput';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import ButtonComp from '../../component/common-components/buttonComp/ButtonComp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ChangePasswordService, UpdateProfileService } from '../../services/user/UserService';
import useErrorHandler from '../../services/handler/ErrorHandler';
import NotificationContext from '../../context/Notification/NotificationContext';
import '../../assets/global/global.css';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducer/UserDetails/userAction';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const initialState = {
    password: '',
    newPassword: '',
}

const PassErrorInitial = {
    password: '',
    newPassword: '',
}

const userErrorInitial = {
    firstName: '',
    lastName: ''
}

export default function UserTabs({ user }) {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const [isEdit, setIsEdit] = React.useState(false);
    const [showOldPassword, setShowOldPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [userData, setUserData] = React.useState(user);
    const [updatePassword, setUpdatePassword] = React.useState(initialState);
    const [PasswordError, setPasswordError] = React.useState(PassErrorInitial);
    const [userError, setUserError] = React.useState(userErrorInitial);
    const showError = useErrorHandler();
    const Notification = React.useContext(NotificationContext);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
            //setUserError(error.response.data.errors[0]);
        }
    }

    const handleUpdateProfileClick = () => {
        if(userData.firstName.length <= 0){
            setUserError({
                ...userError,
                firstName: 'Required !'
            })
        }else if(userData.lastName.length <= 0){
            setUserError({
                ...userError,
                lastName: 'Required !'
            })
        }else{
            setUserError(userErrorInitial);
            handleUpdateProfile();
        }
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

    const PasswordChangeHandler = (e) => {
        const { name, value } = e.target;
        setUpdatePassword({
            ...updatePassword,
            [name]: value,
        });
    }

    const ProfileChangeHandler = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        sx={{ fontWeight: 'bold' }}
                        label={isEdit ? "Update Profile" : "Profile Details"}
                        {...a11yProps(0)}
                    />
                    <Tab label="Change Password" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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

            </TabPanel>
            <TabPanel value={value} index={1}>
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
            </TabPanel>
        </Box>
    );
}