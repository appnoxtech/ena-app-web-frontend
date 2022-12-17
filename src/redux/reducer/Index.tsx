import { combineReducers } from 'redux'
import LoaderReducer from './loader/LoaderReducer'

export const appReducer = combineReducers({
  LoaderReducer: LoaderReducer,
})

export const rootReducers = (state, action) => {
  return appReducer(state, action)
}
