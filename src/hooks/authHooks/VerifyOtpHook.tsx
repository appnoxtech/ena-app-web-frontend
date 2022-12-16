import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { LoginServices, VerifyOtpServices } from '../../services/auth/Auth'
import { useLoginHook } from './LoginHook'

const storeToken = async (token) => {
  try {
    await localStorage.setItem('CUSTOMER_Token', token)
  } catch (e) {
    // saving error
  }
}

export const useVerifyOtpHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = useLoginHook()
  const handelotp = (userData: any) => {
    const email = userData.email
    const otp = userData.otp
    const password = userData.password
    const type = 'VERIFY'
    const data = { email, otp, type }
    const data2 = { email: email, password: password }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Login Service
    VerifyOtpServices(data)
      .then((res) => {
        if (res.data.status == true) {
          alert('Your account is verifed successfully.')
          handleLogin(data2)
        } else {
          alert('server error')
        }
      })
      .catch((err) => {
        //change when api upgrade
        if (err.response.data.msg == 'OTP Is Invalid') {
          alert('Wrong otp')
        } else {
          alert('Server problem')
        }
      })
  }
  return handelotp
}
