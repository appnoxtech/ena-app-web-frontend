import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { forgetpasswordServices } from '../../services/auth/Auth'
import useErrorHandler from '../../services/handler/ErrorHandler'

export const useForgetPassHook = () => {
  const navigate = useNavigate();
  const showError = useErrorHandler();
  const dispatch = useDispatch();
  const handleForgetPass = async (userData: any) => {
    const email = userData.email
    const type = 'GENERATE'
    const data = { email, type }

    // started Loader
    dispatch(updateLoaderState(true))
    // Call Forgetpass Service
    try {
      const res = await forgetpasswordServices(data);
      navigate('/resetpass/otpvar', { state: { email: email, otp: res.data.otp } })
    } catch (error) {
      showError(error);
    }
  }
  return handleForgetPass
}
