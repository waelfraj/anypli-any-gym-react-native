import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native';
import { RootStackParamList } from '../../../../navigations/RootTypes';
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { RegisterRequest } from '../../../../models/Auth';
import { REGISTER_SCREEN_NAME } from '../../../../utils/constants/screenName';

export type RegisterScreenProps = {
  goToLogin: (event: GestureResponderEvent) => void;
  control: Control<RegisterRequest, RegisterRequest>;
  handleSubmit: UseFormHandleSubmit<RegisterRequest, RegisterRequest>;
  errors: FieldErrors<RegisterRequest>;
  onSubmit: (formData: RegisterRequest) => Promise<void>;
  isSubmitted: boolean;
};

export type RegisterContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof REGISTER_SCREEN_NAME
>;

export type FormData = {
  username: '';
  phone: 0;
  address: '';
  email: '';
  password: '';
  confirmPassword: '';
  role: 0;
  gender: '';
};
