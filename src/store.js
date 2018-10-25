import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  status: false,
  success: false
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['status']
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS':
      console.log(action)
      return {
        ...state,
        status: action.payload
      }
      case 'CHANGE_SUCCESS':
        console.log(action)
        return {
          ...state,
          success: action.payload
      }
    default:
      break;
  }
  return state;
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store);

export  {
    store, persistor
  
}