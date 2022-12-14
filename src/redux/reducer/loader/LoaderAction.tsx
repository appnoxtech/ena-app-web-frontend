import { UPDATE_LOADER_STATE } from './LoaderTypes'
export const updateLoaderState = (state) => {
  return {
    type: UPDATE_LOADER_STATE,
    payload: { state },
  }
}
