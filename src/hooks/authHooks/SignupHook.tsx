import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { SignupServices } from '../../services/auth/Auth'

export const useSignupHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handelSignup = (userData: any) => {
    console.log('userData', userData)
    const firstName = userData.firstname
    const lastName = userData.lastname
    const email = userData.email
    const password = userData.password
    const userType = 'CUSTOMER'
    const data = { firstName, lastName, email, password, userType }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Signnup Service
    SignupServices(data)
      .then((res) => {
        console.log('response', res.data)
        if (res.status == 201) {
          alert('Account Created Successfully, Please login to continue')
          navigate('/login')
        } else {
          alert('Sorry account not created !')
        }
      })
      .catch((err) => {
        if (err.response.data.msg == 'Email Duplicacy') {
          alert('Email You entered already have an account, please login to continue.')
        } else alert('Server problem')
      })
  }
  return handelSignup
}
