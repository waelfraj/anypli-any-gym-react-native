import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../hooks/hooks';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import { LoginRequest } from '../../../../models/Auth';
import { useLoginMutation } from '../../../../store/api/authApi';
import { login } from '../../../../store/slices/authSlice';
import { ERROR_NETWORK } from '../../../../utils/constants/errors';
import {
  FORGET_PASSWORD_SCREEN_NAME,
  REGISTER_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import {
  setToken,
  setTokenType
} from '../../../../utils/helpers/useSensitiveInfo';
import { TOO_MANY_ATTEMPTS } from '../utils/constants';
import { LoginSchema, LoginSchemaType } from '../utils/loginSchema';
import { LoginContainerProps } from '../utils/types';
import Login from './Login';

const LoginContainer: React.FC<LoginContainerProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginRequest] = useLoginMutation();
  const dispatch = useAppDispatch();
  const {
    showInvalidCredentialPopup,
    showNetworkErrorPopup,
    showToManyAttemptsErrorPopup
  } = usePopupActions();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (requestData: LoginRequest) => {
    setIsSubmitted(true);
    try {
      const response = await loginRequest(requestData);
      if ('data' in response) {
        const data = response.data;
        if (data) {
          await setToken(data.token);
          await setTokenType(data.typeToken);
          dispatch(login({ user: data.user, isConnected: true }));
        }
      } else if ('error' in response) {
        if ('name' in response.error) {
          if (response.error.name == ERROR_NETWORK) {
            showNetworkErrorPopup(() => {
              onSubmit(requestData);
            });
          }
        } else if ('data' in response.error) {
          if (response.error.data == TOO_MANY_ATTEMPTS) {
            showToManyAttemptsErrorPopup();
          } else {
            showInvalidCredentialPopup();
          }
        }
      }
    } catch (error) {
      showNetworkErrorPopup(() => {
        onSubmit(requestData);
      });
    } finally {
      setIsSubmitted(false);
    }
  };

  const goToRegister = () => {
    navigate(REGISTER_SCREEN_NAME);
  };
  const goToForgetPassword = () => {
    navigate(FORGET_PASSWORD_SCREEN_NAME);
  };

  return (
    <Login
      goToForgetPassword={goToForgetPassword}
      goToRegister={goToRegister}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default LoginContainer;
