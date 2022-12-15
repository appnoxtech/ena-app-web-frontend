import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { changepasswordServices } from '../../services/auth/Auth'

export const useCreatePassHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCreatePass = (userData: any) => {
    console.log('userData', userData)
    const email = userData.email
    const password = userData.password
    const confirmPassword = userData.confirmPassword
    const type = 'VERIFY'
    const otp = userData.otp
    const data = { email, password, confirmPassword, type, otp }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Forgetpass Service
    changepasswordServices(data)
      .then((res) => {
        console.log('response', res.data)
        navigate('/otp_verified')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return handleCreatePass
}
