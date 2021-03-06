import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../../helper/axiosBaseQuery'
import { ILogin, IRegister, LoginResponse, User } from '../../types'

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'www.example.com/' }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, ILogin>({
      query: (data) => ({
        url: 'login/',
        method: 'POST',
        data,
      }),
    }),

    register: builder.mutation<LoginResponse, IRegister>({
      query: (data) => ({
        url: 'register/',
        method: 'POST',
        data,
      }),
    }),

    getUser: builder.query<User, void>({
      query: () => ({
        url: 'user/',
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authenticationApi
