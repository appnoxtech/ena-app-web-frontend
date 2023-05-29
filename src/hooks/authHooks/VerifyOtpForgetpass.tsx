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

export const useVerifyOtpForgetHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = useLoginHook()
  const handelotp = (userData: any) => {
    const email = userData.email
    const otp = userData.otp
    const type = 'VERIFY'
    const data = { email, otp, type }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Login Service
    VerifyOtpServices(data)
      .then((res) => {
        if (res.data.status == true) {
          navigate('/resetPassword', { state: { email: email } })
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
