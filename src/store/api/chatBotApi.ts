import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCEPT, APP_JSON } from '../../utils/constants/headersParams';
import { reducerPaths } from '../../enums/reducerPaths';
import { LIMIT_REQUEST_TIME } from '../../utils/constants/constants';
import { httpMethod } from '../../enums/global';
import {
  CHATBOT_URL_REQUEST,
  GEMINI_API_KEY
} from '../../utils/constants/chatBot';

export const ChatBotApi = createApi({
  reducerPath: reducerPaths.CHAT_BOT,
  baseQuery: fetchBaseQuery({
    prepareHeaders: async (headers) => {
      headers.set(ACCEPT, APP_JSON);
      return headers;
    },
    timeout: LIMIT_REQUEST_TIME
  }),
  endpoints: (builder) => ({
    generateMessage: builder.mutation({
      query: (body) => ({
        url: `${CHATBOT_URL_REQUEST}${GEMINI_API_KEY}`,
        method: httpMethod.POST,
        body: body
      }),
      transformResponse: (response: any) => {
        return response.candidates[0].content.parts[0].text;
      }
    })
  })
});

export const { useGenerateMessageMutation } = ChatBotApi;
