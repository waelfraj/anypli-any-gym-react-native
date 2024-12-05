import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { CHAT_BOT_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { strings } from '../../../../locales/i18n';
import { useGenerateMessageMutation } from '../../../../store/api/chatBotApi';
import {
  INSCTRUCTIONS,
  PARTS_TYPE,
  ROLE
} from '../../../../utils/constants/chatBot';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppSelector } from '../../../../hooks/hooks';
import { CoachStackParamList } from '../../../../navigations/Coach/CoachStackParamList';
import ChatBot from './ChatBot';

/**
 * Container used to separate ChatBot logic as a wrapper to ChatBot screen
 * @returns JSX.Element
 */
interface ChatBotContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof CHAT_BOT_SCREEN_NAME
  > {}

const ChatBotContainer: React.FC<ChatBotContainerProps> = ({
  navigation
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [generateMessage] = useGenerateMessageMutation();
  const authorization = useAppSelector((state) => state.auth.user.verified);
  const [messages, setMessages] = useState([
    {
      id: 0,
      text: strings('chatBot.firstMessage')
    }
  ]);

  const chatBotSchema = z.object({
    message: z.string({ required_error: strings('errors.required_error') })
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<z.infer<typeof chatBotSchema>>({
    resolver: zodResolver(chatBotSchema)
  });

  const formatMessage = (message: string) => {
    return JSON.stringify({
      contents: [
        {
          role: ROLE,
          parts: [{ [PARTS_TYPE]: INSCTRUCTIONS + '\n' + message }]
        }
      ]
    });
  };

  const sendMessage = async (formData: { message: string }) => {
    try {
      setLoading(true);
      if (!authorization) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length, text: `${formData.message}` },
          {
            id: prevMessages.length + 1,
            text: strings('errors.chatBotAuthorization')
          }
        ]);
      } else {
        const response = await generateMessage(formatMessage(formData.message));
        if ('data' in response) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length, text: `${formData.message}` },
            { id: prevMessages.length + 1, text: response.data }
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length, text: `${formData.message}` },
            {
              id: prevMessages.length + 1,
              text: strings('errors.chatBot')
            }
          ]);
        }
      }
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length, text: `${formData.message}` },
        {
          id: prevMessages.length + 1,
          text: strings('errors.chatBot')
        }
      ]);
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <ChatBot
      messages={messages}
      loading={loading}
      sendMessage={sendMessage}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default ChatBotContainer;
