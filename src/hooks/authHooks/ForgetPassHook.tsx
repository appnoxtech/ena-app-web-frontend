import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { forgetpasswordServices } from '../../services/auth/Auth'

export const useForgetPassHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleForgetPass = (userData: any) => {
    const email = userData.email
    const type = 'GENERATE'
    const data = { email, type }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Forgetpass Service
    forgetpasswordServices(data)
      .then((res) => {
        navigate('/resetpass/otpvar', { state: { email: email, otp: res.data.otp } })
      })
      .catch((err) => {
      })
  }
  return handleForgetPass
}
