import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import { Coach, CoachResponse, decodeCoachResponse } from '../../models/Coach';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const CoachApi = createApi({
  reducerPath: reducerPaths.COACH,
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
    getAllCoach: builder.query({
      query: (page) => `${URLS.COACHES_URL}?page=${page}`,
      transformResponse: (response: any) => {
        const coaches = response.data.data.map((coachResponse: CoachResponse) =>
          decodeCoachResponse(coachResponse)
        );
        const totalPages = response.data.last_page;
        const data = {
          coaches: coaches,
          totalPages: totalPages
        };

        return data;
      }
    }),
    getCoachById: builder.query<Coach | undefined, string>({
      query: (id) => `${URLS.COACHES_URL}${id}`,
      transformResponse: (response: any) => {
        return decodeCoachResponse(response.data);
      }
    }),
    deleteCoach: builder.mutation({
      query: (id) => ({
        url: `${URLS.COACHES_URL}${id}`,
        method: httpMethod.DELETE
      }),
      transformResponse: (response: any) => {
        return decodeCoachResponse(response.data);
      }
    }),
    validateCoach: builder.mutation<void, string>({
      query: (id) => ({
        url: `${URLS.VALIDATE_COACHES_DATA_URL}/${id}`,
        method: httpMethod.POST
      })
    })
  })
});

export const {
  useLazyGetAllCoachQuery,
  useGetCoachByIdQuery,
  useDeleteCoachMutation,
  useValidateCoachMutation
} = CoachApi;
