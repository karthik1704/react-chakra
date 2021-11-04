import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { LoginResponse } from '../../types'

const initialState: LoginResponse = {
  isAuthenticated: null,
  accessToken: null,
  refreshToken: null,
  user: null,
}

const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    loginUser: (
      state: LoginResponse,
      { payload }: PayloadAction<LoginResponse>
    ) => {
      state.isAuthenticated = true
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
      state.user = payload.user
    },
    logoutUser: (state: LoginResponse) => {
      state.isAuthenticated = false
      state.accessToken = null
      state.refreshToken = null
      state.user = null
    },
  },
  extraReducers: {},
})

const { reducer, actions } = authenticationSlice

const { loginUser, logoutUser } = actions

export default reducer
