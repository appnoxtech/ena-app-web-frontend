import { UPDATE_LOADER_STATE } from './LoaderTypes'

const initialState = {
  isLoading: false,
}

const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADER_STATE:
      return {
        isLoading: action.payload.state,
      }

    default:
      return state
  }
}

export default LoaderReducer
