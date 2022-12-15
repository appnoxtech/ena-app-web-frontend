import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoaderState } from '../../redux/reducer/loader/LoaderAction'
import { LoginServices } from '../../services/auth/Auth'

// async fn. to store user Token
const storeToken = async (token) => {
  try {
    await localStorage.setItem('CUSTOMER_Token', token)
  } catch (e) {
    // saving error
    console.log(e)
  }
}

export const useLoginHook = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handelLogin = (userData: any) => {
    const password = userData.password
    const userName = userData.email
    const data = { userName, password }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Login Service
    LoginServices(data)
      .then((res) => {
        if (res.status == 200) {
          if (res.data.token) {
            const token = res.data.token
            storeToken(token)
            navigate('/')
            // stop Loader
            dispatch(updateLoaderState(false))
          } else {
            // stop Loader
            dispatch(updateLoaderState(false))
          }
        } else {
          alert('You entered wrong input')
        }
      })
      .catch((err) => {
        if (err.response.data.msg == 'Invalid Credential') {
          alert('Invalid Password')
        }
        if (err.response.data.msg == 'Invalid User') {
          alert('Invalid Email')
        }
      })
  }
  return handelLogin
}
