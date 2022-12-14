import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { forgetpasswordServices } from '../../services/auth/Auth'

// async fn. to store user Token
const storeOtp = async (otp) => {
  try {
    await localStorage.setItem('otp', otp)
  } catch (e) {
    // saving error
    console.log(e)
  }
}

export const useForgetPassHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleForgetPass = (userData: any) => {
    console.log('userData', userData)
    const email = userData.email
    const type = 'GENERATE'
    const data = { email, type }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Login Service
    forgetpasswordServices(data)
      .then((res) => {
        console.log('response', res.data)
        storeOtp(res.data.OTP)
        navigate('/otp_verification')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return handleForgetPass
}
