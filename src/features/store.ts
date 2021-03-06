import { configureStore } from '@reduxjs/toolkit'

import authenticationReducer from './authentication/authenticationSlice'
import { authenticationApi } from './authentication/authenticationApi'

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware: (getDefaultMiddeware) => getDefaultMiddeware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
