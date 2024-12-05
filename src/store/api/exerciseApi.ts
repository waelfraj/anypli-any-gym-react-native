import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import {
  Exercise,
  ExerciseResponse,
  decodeExerciseResponse
} from '../../models/Exercise';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

interface GetListExercisesResponse {
  data: ExerciseResponse[];
  last_page: number;
}

export const ExercisesApi = createApi({
  reducerPath: reducerPaths.EXERCISES,
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
    getAllExercises: builder.query({
      query: (page) => `${URLS.GET_EXERCISE_URL}?page=${page}`,
      transformResponse: (response: GetListExercisesResponse) => {
        if ('data' in response) {
          let exercices: Exercise[] = [];
          response.data.forEach((element: ExerciseResponse) => {
            exercices.push(decodeExerciseResponse(element));
          });
          return exercices;
        } else {
          return [];
        }
      }
    }),
    getExercisesByCategory: builder.query({
      query: ({ category, currentPage }) =>
        `${URLS.GET_EXERCISE_BY_CATEGORY_URL}/${category}?page=${currentPage}`,

      transformResponse: (response: any) => {
        let exercices: Exercise[] = [];
        response.data.data.forEach((element: ExerciseResponse) => {
          exercices.push(decodeExerciseResponse(element));
        });
        const totalPages = response.data.last_page;
        return {
          exercises: exercices,
          totalPages: totalPages
        };
      }
    }),
    addExercise: builder.mutation({
      query: (body) => ({
        url: `${URLS.ADD_EXERCISE_BY_COACH_URL}`,
        body: body,
        method: httpMethod.POST
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return decodeExerciseResponse(response.data);
        } else {
          return [];
        }
      }
    })
  })
});

export const {
  useGetAllExercisesQuery,
  useLazyGetExercisesByCategoryQuery,
  useAddExerciseMutation
} = ExercisesApi;
