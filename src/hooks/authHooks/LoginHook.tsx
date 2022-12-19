import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { LoginServices, forgetpasswordServices } from '../../services/auth/Auth'
import { updateUserData } from '../../redux/reducer/UserDetails/userAction'

// async fn. to store user Token
const storeToken = async (token: string) => {
  try {
    localStorage.setItem('@user_Token', token);
  } catch (e) {
    // saving error
  }
}

export const useLoginHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handelLogin = (userData: any) => {
    const password = userData.password
    const userName = userData.email
    const data = { userName, password }

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
            } = res.data;
            const user = {firstName,lastName, isLogin: true};
            dispatch(updateUserData(user));
            navigate('/')
            // stop Loader
            dispatch(updateLoaderState(false))
          } else if (res.data.emailVerified == false) {
            alert('Your account is not verified please click ok to verify.')
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
          alert('Invalid Password')
        }
        if (err.response.data.msg == 'Invalid User') {
          alert('This email is not have an account.')
        }
      })
  }
  return handelLogin
}
