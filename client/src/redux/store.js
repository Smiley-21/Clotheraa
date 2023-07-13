// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './cartReducer'

// export const store = configureStore({
//   reducer: {cart:cartReducer},
// })

// By doing above only will remain until not refreshed 
// Therefore to maintain we required Persist library
import cartReducer from './cartReducer'
import { configureStore } from '@reduxjs/toolkit'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const stripe = require('stripe')(process.env.STRIPE_PUBLIC_KEY);




const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart:persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

