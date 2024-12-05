import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import {
  ACCEPT,
  APP_JSON,
  AUTHORIZATION,
  TOKEN_TYPE
} from '../../utils/constants/headersParams';
import { reducerPaths } from '../../enums/reducerPaths';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';
import { httpMethod } from '../../enums/global';
import { WeightResponse, decodeWeightResponse } from '../../models/Weight';

export const WeightApi = createApi({
  reducerPath: reducerPaths.WEIGHT,
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
    createWeigh: builder.mutation({
      query: (body) => ({
        url: `${URLS.WEIGHT_URL}`,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return decodeWeightResponse(response.data);
        }
      }
    }),
    deleteWeight: builder.mutation({
      query: (id) => ({
        url: `${URLS.WEIGHT_URL}/${id}`,
        method: httpMethod.DELETE
      })
    }),
    getWeigh: builder.query({
      query: (page) => ({
        url: `${URLS.WEIGHT_URL}?page=${page}`,
        method: httpMethod.GET
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return {
            weight: response.data.data.map((weight: WeightResponse) =>
              decodeWeightResponse(weight)
            ),
            totalPages: response.data.last_page
          };
        } else {
          return [];
        }
      }
    })
  })
});

export const {
  useCreateWeighMutation,
  useDeleteWeightMutation,
  useGetWeighQuery
} = WeightApi;
