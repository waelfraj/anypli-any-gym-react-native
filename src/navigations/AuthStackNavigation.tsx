import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  FORGET_PASSWORD_OTP_SCREEN_NAME,
  FORGET_PASSWORD_SCREEN_NAME,
  LOGIN_SCREEN_NAME,
  RESET_PASSWORD_SCREEN_NAME,
  REGISTER_SCREEN_NAME,
  WELCOME_SCREEN_NAME
} from '../utils/constants/screenName';
import RegisterContainer from '../features/OnBoarding/Register/screen/Register.container';
import WelcomeContainer from '../features/OnBoarding/Welcome/screens/Welcome.container';
import LoginContainer from '../features/OnBoarding/Login/screen/Login.container';
import ForgetPasswordEmailContainer from '../features/OnBoarding/ForgetPassword/screens/EmailScreen/ForgetPasswordEmail.container';
import ForgetPasswordOTPContainer from '../features/OnBoarding/ForgetPassword/screens/OtpScreen/ForgetPasswordOTP.container';
import ResetPasswordContainer from '../features/OnBoarding/ForgetPassword/screens/ResetPasswordScreen/ResetPassword.container';
import useLocalStorage from '../utils/helpers/useAsyncStorage';
import { RootStackParamList } from './RootStackParamList';

const AuthStackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [isFirstTime] = useLocalStorage('isFirstTime');
  const isFirstTimeString =
    typeof isFirstTime === 'string' ? isFirstTime : null;

  const initialRouteName =
    isFirstTimeString === 'false' ? LOGIN_SCREEN_NAME : WELCOME_SCREEN_NAME;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}>
        {!isFirstTimeString ? null : (
          <Stack.Screen
            name={WELCOME_SCREEN_NAME}
            component={WelcomeContainer}
          />
        )}
        <Stack.Screen name={LOGIN_SCREEN_NAME} component={LoginContainer} />
        <Stack.Screen
          name={REGISTER_SCREEN_NAME}
          component={RegisterContainer}
        />
        <Stack.Screen
          name={FORGET_PASSWORD_SCREEN_NAME}
          component={ForgetPasswordEmailContainer}
        />
        <Stack.Screen
          name={FORGET_PASSWORD_OTP_SCREEN_NAME}
          component={ForgetPasswordOTPContainer}
        />
        <Stack.Screen
          name={RESET_PASSWORD_SCREEN_NAME}
          component={ResetPasswordContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigator;
