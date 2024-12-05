import React, { useState } from 'react';
import Register from './Register';
import { RegisterContainerProps } from '../utils/types';
import { LOGIN_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { useRegisterMutation } from '../../../../store/api/authApi';
import { useAppDispatch } from '../../../../hooks/hooks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterSchemaType } from '../utils/registerSchema';
import { RegisterRequest } from '../../../../models/Auth';
import { login } from '../../../../store/slices/authSlice';
import {
  setRefreshToken,
  setToken,
  setTokenType
} from '../../../../utils/helpers/useSensitiveInfo';
import { ERROR_NETWORK } from '../../../../utils/constants/errors';
import { usePopupActions } from '../../../../hooks/usePopupActions';

const RegisterContainer: React.FC<RegisterContainerProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registerRequest] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const { showInvalidCredentialPopup, showNetworkErrorPopup } =
    usePopupActions();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit = async (formData: RegisterRequest) => {
    setIsSubmitted(true);
    const requestData = {
      name: formData.username,
      role_id: formData.role,
      email_valid: false,
      ...formData
    };
    try {
      const response = await registerRequest(requestData);

      if ('data' in response) {
        const data = response.data;
        await setToken(data.token);
        await setRefreshToken(data.refreshToken);
        await setTokenType(data.typeToken);
        dispatch(login({ user: data.user, isConnected: true }));
      } else if ('error' in response) {
        if ('name' in response.error) {
          if (response.error.name == ERROR_NETWORK) {
            showNetworkErrorPopup(() => {
              onSubmit(requestData);
            });
          }
        } else {
          showInvalidCredentialPopup();
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

  const goToLogin = () => {
    navigate(LOGIN_SCREEN_NAME);
  };

  return (
    <Register
      goToLogin={goToLogin}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default RegisterContainer;
