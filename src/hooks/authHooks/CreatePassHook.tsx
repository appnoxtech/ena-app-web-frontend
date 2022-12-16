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
    const data = { email, password, confirmPassword }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Forgetpass Service
    changepasswordServices(data)
      .then((res) => {
        console.log('response', res.data)
        console.log(email)
        navigate('/otp_verified', { state: { email: email, password: password } })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return handleCreatePass
}
