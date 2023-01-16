import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { changepasswordServices } from '../../services/auth/Auth'
import useErrorHandler from '../../services/handler/ErrorHandler'

export const useCreatePassHook = () => {
  const navigate = useNavigate();
  const showError = useErrorHandler();
  const dispatch = useDispatch();

  const handleCreatePass = async (userData: any) => {
    const email = userData.email
    const password = userData.password
    const confirmPassword = userData.confirmPassword
    const data = { email, password, confirmPassword }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Forgetpass Service
    try {
      await changepasswordServices(data);
      navigate('/otp_verified', { state: { email: email, password: password } });
    } catch (error) {
       showError(error);
    }
  }
  return handleCreatePass
}
