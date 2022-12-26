import { combineReducers } from 'redux'
import LoaderReducer from './loader/LoaderReducer'
import UserReducer from './UserDetails/userReducer'
import { CartReducer } from './cart/CartReducer'
import CategoriesReducer from './categorie/categorieReducer'

export const appReducer = combineReducers({
  LoaderReducer: LoaderReducer,
  user: UserReducer,
  cart: CartReducer,
  categorie: CategoriesReducer,
});

export const rootReducers = (state, action) => {
  return appReducer(state, action)
}
