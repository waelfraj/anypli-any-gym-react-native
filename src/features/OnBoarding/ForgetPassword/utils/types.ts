import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native';
import { RootStackParamList } from '../../../../navigations/RootTypes';
import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit
} from 'react-hook-form';
import {
  FORGET_PASSWORD_OTP_SCREEN_NAME,
  FORGET_PASSWORD_SCREEN_NAME,
  RESET_PASSWORD_SCREEN_NAME
} from '../../../../utils/constants/screenName';
export interface RequestEmail {
  email: string;
}

export type ForgetPasswordEmailScreenProps = {
  goToRegister: (event: GestureResponderEvent) => void;
  control: Control<RequestEmail, RequestEmail>;
  handleSubmit: UseFormHandleSubmit<RequestEmail, RequestEmail>;
  errors: FieldErrors<RequestEmail>;
  onSubmit: (email: RequestEmail) => void;
  isSubmitted: boolean;
};

export type ForgetPasswordEmailContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof FORGET_PASSWORD_SCREEN_NAME
>;

export interface RequestOtp {
  otp: string;
}

export type ForgetPasswordOTPScreenProps = {
  control: Control<RequestOtp, RequestOtp>;
  handleSubmit: UseFormHandleSubmit<RequestOtp, RequestOtp>;
  errors: FieldErrors<RequestOtp>;
  onSubmit: (data: RequestOtp) => Promise<void>;
  isSubmitted: boolean;
};

export type ForgetPasswordOTPContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof FORGET_PASSWORD_OTP_SCREEN_NAME
>;

export interface RequestResetPassword {
  password: string;
  confirmPassword: string;
}

export type ResetPasswordScreenProps = {
  control: Control<RequestResetPassword, RequestResetPassword>;
  handleSubmit: UseFormHandleSubmit<RequestResetPassword, RequestResetPassword>;
  errors: FieldErrors<RequestResetPassword>;
  onSubmit: SubmitHandler<RequestResetPassword>;
  isSubmitted: boolean;
};

export type ResetPasswordContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof RESET_PASSWORD_SCREEN_NAME
>;
