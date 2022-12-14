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
    console.log('userData', userData)
    const password = userData.password
    const userName = userData.email
    const data = { userName, password }

    // started Loader
    dispatch(updateLoaderState(true))

    // Call Login Service
    LoginServices(data)
      .then((res) => {
        console.log('response', res.data)
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
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return handelLogin
}
