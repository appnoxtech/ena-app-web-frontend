import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { SignupServices } from '../../services/auth/Auth'
import { useContext } from 'react'
import NotificationContext from '../../context/Notification/NotificationContext'

export const useSignupHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Notification = useContext(NotificationContext);

  const handelSignup = (userData: any) => {
    const firstName = userData.firstname
    const lastName = userData.lastname
    const email = userData.email
    const password = userData.password
    const data = { firstName, lastName, email, password }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Signnup Service
    SignupServices(data)
      .then((res) => {
        if (res.status == 201) {
          alert('Account Created Successfully, Please verify your account')
          navigate('/otp_verification', { state: { email: email, password: password } })
        } else {
          alert('Sorry account not created !')
        }
      })
      .catch((err) => {
        if (err.response.data.msg == 'Email Duplicacy') {
          Notification({
            title: 'Authentication',
            description: 'Email You entered already have an account, please login to continue.',
            type: 'info'
          });
          navigate('/login')
        } else{
            Notification({
              title: 'Technical',
              description: err.response.data.msg,
              type: 'Warning'
            });
        }
      })
  }
  return handelSignup
}
