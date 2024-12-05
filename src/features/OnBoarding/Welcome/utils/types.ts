import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native';
import { RootStackParamList } from '../../../../navigations/RootTypes';
import { WELCOME_SCREEN_NAME } from '../../../../utils/constants/screenName';

export type WelcomeScreenProps = {
  goToLogin: (event: GestureResponderEvent) => void;
  goToRegister: (event: GestureResponderEvent) => void;
};

export type WelcomeContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof WELCOME_SCREEN_NAME
>;
