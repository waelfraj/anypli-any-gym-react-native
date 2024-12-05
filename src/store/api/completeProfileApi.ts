import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import {
  ACCEPT,
  APP_JSON,
  AUTHORIZATION,
  TOKEN_TYPE
} from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const CompleteProfileApi = createApi({
  reducerPath: reducerPaths.COMPLETE_PROFILE,
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
    CompleteProfile: builder.mutation({
      query: (body) => ({
        url: `${URLS.COMPLETE_PROFILE_URL}`,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    })
  })
});

export const { useCompleteProfileMutation } = CompleteProfileApi;
