import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URLS } from '../../enums/endpoints';
import { httpMethod } from '../../enums/global';
import { reducerPaths } from '../../enums/reducerPaths';
import {
  Member,
  MemberResponse,
  decodeMemberResponse
} from '../../models/Member';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { retrieveToken } from '../../utils/helpers/useSensitiveInfo';

export const MemberApi = createApi({
  reducerPath: reducerPaths.MEMBER,
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
    getAllMember: builder.query({
      query: (page) => `${URLS.MEMBERS_URL}?page=${page}`,
      transformResponse: (response: any) => {
        if ('data' in response) {
          const members = response.data.data.map(
            (memberResponse: MemberResponse) =>
              decodeMemberResponse(memberResponse)
          );
          const totalPages = response.data.last_page;
          return { members: members, totalPages: totalPages };
        } else {
          return [];
        }
      }
    }),
    getMemberById: builder.query<Member | undefined, string>({
      query: (id) => `${URLS.MEMBERS_URL}/${id}`,
      transformResponse: (response: any) => {
        return decodeMemberResponse(response.data);
      }
    }),
    deleteMember: builder.mutation({
      query: (id) => ({
        url: `${URLS.MEMBERS_URL}${id}`,
        method: httpMethod.DELETE
      })
    }),

    validateMember: builder.mutation<void, string>({
      query: (id) => ({
        url: `${URLS.VALIDATE_MEMBER_DATA_URL}/${id}`,
        method: httpMethod.POST
      })
    }),
    attachMemberToTrainingList: builder.mutation<void, string>({
      query: (trainingId) => ({
        url: `${URLS.ATTACH_MEMBER_TRAINING_LIST}`,
        method: httpMethod.POST,
        body: { training_id: trainingId }
      })
    }),
    getMemberTrainingList: builder.query({
      query: () => ({
        url: `${URLS.GET_MEMBER_TRAINING_LIST}`,
        method: httpMethod.GET
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    }),
    getHomeMember: builder.query({
      query: () => ({
        url: `${URLS.GET_HOME_MEMBER}`,
        method: httpMethod.GET
      }),
      transformResponse: (response: any) => {
        return response.data;
      }
    })
  })
});

export const {
  useLazyGetAllMemberQuery,
  useLazyGetMemberByIdQuery,
  useDeleteMemberMutation,
  useValidateMemberMutation,
  useAttachMemberToTrainingListMutation,
  useLazyGetMemberTrainingListQuery,
  useLazyGetHomeMemberQuery
} = MemberApi;
