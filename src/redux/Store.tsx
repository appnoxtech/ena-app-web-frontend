
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducers } from './reducer/Index';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducers);
export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
  
// const store = createStore(rootReducers)
// export default store
