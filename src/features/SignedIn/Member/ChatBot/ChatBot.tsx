import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import styles from './chatBotStyles';
import { strings } from '../../../../locales/i18n';
import CustomTextInput from '../../../../components/TextInput/CustomTextInput';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit
} from 'react-hook-form';
import CustomButton from '../../../../components/Button/CustomButton';

/**
 * Represents ChatBot screen ui
 * @returns JSX.Element
 */

interface Message {
  id: number;
  text: string;
}

interface ChatBotProps {
  messages: Message[];
  loading: boolean;
  sendMessage: (formData: { message: string }) => Promise<void>;
  control: Control<
    {
      message: string;
    },
    any,
    {
      message: string;
    }
  >;
  handleSubmit: UseFormHandleSubmit<
    {
      message: string;
    },
    {
      message: string;
    }
  >;
  errors: FieldErrors<{
    message: string;
  }>;
}
const ChatBot: React.FC<ChatBotProps> = ({
  messages,
  loading,
  sendMessage,
  control,
  handleSubmit,
  errors
}): JSX.Element => {
  const renderMessage = ({ item }: { item: { id: number; text: string } }) => (
    <View
      style={item.id % 2 === 0 ? styles.userContainer : styles.chatContainer}>
      <Text style={item.id % 2 === 0 ? styles.userText : styles.chatText}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputContainer}>
        {loading ? (
          <ActivityIndicator style={styles.loading} size={'large'} />
        ) : (
          <>
            <Controller
              control={control}
              name={'message'}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="done"
                  style={[styles.input, errors.message && styles.error]}
                  placeholder={strings('labels.typeMessage')}
                />
              )}
            />
            <CustomButton
              title={strings('actions.send')}
              handlePress={handleSubmit(sendMessage)}
              isSubmitted={loading}
              textStyle={styles.sendButtonText}
              ButtonProps={styles.sendButton}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default ChatBot;
