import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import { Staff, StaffResponse, decodeStaffResponse } from '../../models/Staff';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const StaffApi = createApi({
  reducerPath: reducerPaths.STAFF,
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
    getHomeStaffData: builder.query({
      query: () => URLS.GET_HOME_STAFF_DATA_URL,
      transformResponse: (response: any) => {
        return response.data;
      }
    }),

    createStaff: builder.mutation({
      query: (body) => ({
        url: URLS.CREATE_STAFF_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),

    editStaffProfil: builder.mutation({
      query: (body) => ({
        url: URLS.EDIT_STAFF_DATA_URL,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),

    getAllStaff: builder.query<Staff[], void>({
      query: () => URLS.STAFF_URL,
      transformResponse: (response: any) => {
        if ('data' in response) {
          return response.data.data.map((staffResponse: StaffResponse) =>
            decodeStaffResponse(staffResponse)
          );
        } else {
          return [];
        }
      }
    }),
    getStaffById: builder.query<Staff | undefined, string>({
      query: (id) => `${URLS.STAFF_URL}/${id}`,
      transformResponse: (response: any) => {
        return decodeStaffResponse(response.data);
      }
    }),
    deleteStaff: builder.mutation({
      query: (id) => ({
        url: `${URLS.STAFF_URL}/${id}`,
        method: httpMethod.DELETE
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    validateStaff: builder.mutation<void, string>({
      query: (id) => ({
        url: `${URLS.VALIDATE_STAFF_DATA_URL}/${id}`,
        method: httpMethod.POST
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    })
  })
});

export const {
  useLazyGetHomeStaffDataQuery,
  useCreateStaffMutation,
  useEditStaffProfilMutation,
  useLazyGetAllStaffQuery,
  useValidateStaffMutation,
  useDeleteStaffMutation,
  useLazyGetStaffByIdQuery
} = StaffApi;
