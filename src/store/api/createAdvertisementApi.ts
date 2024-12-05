import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import {
  ACCEPT,
  APP_JSON,
  AUTHORIZATION,
  MULTIPART_FORM_DATA,
  TOKEN_TYPE
} from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const CreateAdvetisementApi = createApi({
  reducerPath: reducerPaths.CREATE_ADVERTISEMENT,
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await retrieveToken();

      if (token) {
        headers.set(AUTHORIZATION, `${TOKEN_TYPE} ${token}`);
      }
      headers.set(ACCEPT, APP_JSON);
      return headers;
    },
    timeout: LIMIT_REQUEST_TIME
  }),
  endpoints: (builder) => ({
    createAdvetisement: builder.mutation({
      query: (body) => ({
        url: `${URLS.CREATE_ADVERTISEMENT_DATA_URL}`,
        method: httpMethod.POST,
        body: body,
        headers: {
          'Content-Type': MULTIPART_FORM_DATA
        }
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    getLastAdvetisement: builder.query({
      query: () => ({
        url: `${URLS.CREATE_ADVERTISEMENT_DATA_URL}/last`,
        method: httpMethod.GET
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    })
  })
});

export const { useCreateAdvetisementMutation, useGetLastAdvetisementQuery } =
  CreateAdvetisementApi;
