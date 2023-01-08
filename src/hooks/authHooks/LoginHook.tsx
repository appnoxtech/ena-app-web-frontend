import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { LoginServices, forgetpasswordServices } from '../../services/auth/Auth'
import { updateUserData } from '../../redux/reducer/UserDetails/userAction'
import { useContext } from 'react'
import NotificationContext from '../../context/Notification/NotificationContext'

// async fn. to store user Token
const storeToken = async (token: string) => {
  try {
    localStorage.setItem('@user_Token', token);
  } catch (e) {
    // saving error
  }
}

export const useLoginHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Notification = useContext(NotificationContext);

  const handelLogin = (userData: any, source:any) => {
    const password = userData.password;
    const userName = userData.email;
    const data = { userName, password };
    // started Loader
    dispatch(updateLoaderState(true))
    // Call Login Service
    LoginServices(data)
      .then((res) => {
        if (res.status == 200) {
          if (res.data.emailVerified == true) {
            const token = res.data.token
            storeToken(token);
            const {
              firstName,
              lastName,
              userType,
            } = res.data;
            const user = {firstName,lastName,userType, isLogin: true};
            dispatch(updateUserData(user));
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(updateUserData(user));
            if(user.userType === 'customer'){
              navigate(source);
            }else {
              navigate('/');
            }
            Notification({
              title: 'Authentication',
              description: 'Logged In. ',
              type: 'success'
            });
            // stop Loader
            dispatch(updateLoaderState(false))
          } else if (res.data.emailVerified == false) {
            Notification({
              title: 'Authentication',
              description: 'Your account is not verified.',
              type: 'info'
            });
            navigate('/otp_verification', { state: { email: userName, password: password } })
          } else {
            // stop Loader
            dispatch(updateLoaderState(false))
          }
        }
      })
      .catch((err) => {
        //change when api upgrade
        if (err.response.data.msg == 'Invalid Credential') {
          Notification({
            title: 'Authentication',
            description: 'Invalid Credential',
            type: 'error'
          });
        }
        if (err.response.data.msg == 'Invalid User') {
          Notification({
            title: 'Authentication',
            description: 'User not found.',
            type: 'error'
          });
        }
      })
  }
  return handelLogin
}
