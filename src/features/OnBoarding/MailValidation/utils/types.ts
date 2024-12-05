import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigations/RootTypes';
import { MAIL_VALIDATION_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { GestureResponderEvent } from 'react-native';

export interface EmailValidationRequest {
  otp: string;
}

export interface MailValidationScreenProps {
  control: Control<EmailValidationRequest, EmailValidationRequest>;
  handleSubmit: UseFormHandleSubmit<
    EmailValidationRequest,
    EmailValidationRequest
  >;
  errors: FieldErrors<EmailValidationRequest>;
  onSubmit: (data: EmailValidationRequest) => Promise<void>;
  isSubmitted: boolean;
  handleForward: (event: GestureResponderEvent) => void;
  handleLogin: (event: GestureResponderEvent) => void;
}

export interface MailValidationContainerProps
  extends NativeStackScreenProps<
    RootStackParamList,
    typeof MAIL_VALIDATION_SCREEN_NAME
  > {}
