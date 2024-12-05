import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native';
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { LoginRequest } from '../../../../models/Auth';
import { LOGIN_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { RootStackParamList } from '../../../../navigations/RootStackParamList';

export type LoginScreenProps = {
  goToRegister: (event: GestureResponderEvent) => void;
  goToForgetPassword: (event: GestureResponderEvent) => void;
  control: Control<LoginRequest> | undefined;
  handleSubmit: UseFormHandleSubmit<LoginRequest, LoginRequest>;
  errors: FieldErrors<LoginRequest>;
  onSubmit: (requestData: LoginRequest) => Promise<void>;
  isSubmitted: boolean;
};

export type LoginContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof LOGIN_SCREEN_NAME
>;

export type FormData = {
  email: '';
  password: '';
};
