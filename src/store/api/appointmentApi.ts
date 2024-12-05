import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import {
  AppointmentResponse,
  decodeAppointmentResponse
} from '../../models/Appointment';
import { LoginRequest } from '../../models/Auth';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const AppointmentApi = createApi({
  reducerPath: reducerPaths.Appointment,
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await retrieveToken();

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set(ACCEPT, APP_JSON);
      return headers;
    },
    timeout: LIMIT_REQUEST_TIME
  }),

  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (body: LoginRequest) => ({
        url: URLS.APPOINTMENT_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    getAppointment: builder.query({
      query: () => ({
        url: URLS.APPOINTMENT_URL,
        method: httpMethod.GET
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return response.data.map((element: AppointmentResponse) => {
            return decodeAppointmentResponse(element);
          });
        }
        return [];
      }
    }),
    participateAppointment: builder.mutation({
      query: (appointmentId) => ({
        url: `${URLS.APPOINTMENT_URL}/${appointmentId}/${URLS.PARTICIPATE_URL}`,
        method: httpMethod.POST
      })
    })
  })
});

export const {
  useCreateAppointmentMutation,
  useLazyGetAppointmentQuery,
  useParticipateAppointmentMutation
} = AppointmentApi;
