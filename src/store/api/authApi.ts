import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import { LoginRequest, LoginResponse } from '../../models/Auth';
import { User, decodeUserResponse } from '../../models/User';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
export const AuthApi = createApi({
  reducerPath: reducerPaths.AUTH,
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(ACCEPT, APP_JSON);
      return headers;
    },
    timeout: LIMIT_REQUEST_TIME
  }),

  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (body: LoginRequest) => ({
        url: URLS.LOGIN_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: { data: LoginResponse }) => {
        if ('data' in response) {
          return {
            user: decodeUserResponse(response.data.user),
            token: response.data.token,
            typeToken: response.data.typeToken
          };
        }
      }
    }),
    Register: builder.mutation({
      query: (body: User) => ({
        url: URLS.REGISTER_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: { data: LoginResponse }) => {
        if ('data' in response) {
          return {
            user: decodeUserResponse(response.data.user),
            token: response.data.token,
            typeToken: response.data.typeToken
          };
        }
      }
    }),
    Logout: builder.mutation({
      query: (body: string) => ({
        url: URLS.LOGOUT_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    forgetPasswordEmail: builder.mutation({
      query: (body) => ({
        url: URLS.FORGET_PASSWORD_EMAIL_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    forgetPasswordOTP: builder.mutation({
      query: (body) => ({
        url: URLS.FORGET_PASSWORD_OTP_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    forgetPasswordReset: builder.mutation({
      query: (body) => ({
        url: URLS.FORGET_PASSWORD_RESET_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    sendMailValidation: builder.mutation({
      query: (body) => ({
        url: URLS.SEND_MAIL_VALIDATION_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    checkMailValidation: builder.mutation({
      query: (body) => ({
        url: URLS.CHECK_MAIL_VALIDATION_TOKEN,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    })
  })
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useForgetPasswordEmailMutation,
  useForgetPasswordOTPMutation,
  useForgetPasswordResetMutation,
  useSendMailValidationMutation,
  useCheckMailValidationMutation
} = AuthApi;
