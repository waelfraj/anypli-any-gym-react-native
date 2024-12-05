import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import {
  TrainingList,
  TrainingListResponse,
  decodeTrainingListsResponse
} from '../../models/TrainingList';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const TrainingListsApi = createApi({
  reducerPath: reducerPaths.LIST_EXERCISES,
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
    getAllTrainingList: builder.query<TrainingList[], void>({
      query: () => `${URLS.TRAINING_LIST_URL}`,
      transformResponse: (response: any) => {
        if ('data' in response) {
          return response.data.data.map(
            (trainingListResponse: TrainingListResponse) =>
              decodeTrainingListsResponse(trainingListResponse)
          );
        } else {
          return [];
        }
      }
    }),
    getTrainingListByCoach: builder.query<TrainingList[], void>({
      query: () => ({
        url: `${URLS.GET_LIST_EXERCISE_BY_COACH_URL}`
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return response.data.data.map(
            (trainingListResponse: TrainingListResponse) =>
              decodeTrainingListsResponse(trainingListResponse)
          );
        } else {
          return [];
        }
      }
    }),

    getTrainingListBytitle: builder.query<TrainingList[], string>({
      query: (title) => ({
        url: `${URLS.TRAINING_LIST_URL}/query/?title=${title}`
      }),
      transformResponse: (response: any) => {
        if ('data' in response) {
          return response.data.data.map(
            (trainingListResponse: TrainingListResponse) =>
              decodeTrainingListsResponse(trainingListResponse)
          );
        } else {
          return [];
        }
      }
    }),
    addTrainingList: builder.mutation({
      query: (body) => ({
        url: `${URLS.ADD_TRAINING_LIST_URL}`,
        body: body,
        method: httpMethod.POST
      }),
      transformResponse: (response: any) => {
        return decodeTrainingListsResponse(response.data);
      }
    }),
    removeExerciseFromList: builder.mutation({
      query: ({ idList, idExercise }) => ({
        url: `${URLS.TRAINING_LIST_URL}/${idList}/${idExercise}`,
        method: httpMethod.DELETE
      })
    })
  })
});

export const {
  useLazyGetAllTrainingListQuery,
  useLazyGetTrainingListByCoachQuery,
  useLazyGetTrainingListBytitleQuery,
  useAddTrainingListMutation,
  useRemoveExerciseFromListMutation
} = TrainingListsApi;
