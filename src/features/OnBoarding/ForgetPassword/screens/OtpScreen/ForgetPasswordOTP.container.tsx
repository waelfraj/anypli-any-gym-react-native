import React, { useState } from 'react';
import ForgetPasswordOTP from './ForgetPasswordOTP';
import { RESET_PASSWORD_SCREEN_NAME } from '../../../../../utils/constants/screenName';
import { ForgetPasswordOTPContainerProps } from '../../utils/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { useForgetPasswordOTPMutation } from '../../../../../store/api/authApi';
import {
  ForgetPasswordOTPSchemaType,
  forgetPasswordOTPSchema
} from '../../utils/forgetPasswordSchema';
import { forgetPasswordOTP } from '../../../../../store/slices/forgetPasswordSlice';
import { ERROR_NETWORK } from '../../../../../utils/constants/errors';
import { usePopupActions } from '../../../../../hooks/usePopupActions';

const ForgetPasswordOTPContainer: React.FC<ForgetPasswordOTPContainerProps> = ({
  navigation: { navigate }
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const email = useAppSelector((state) => state.forgePassword.email);

  const { showInvalidCredentialPopup, showNetworkErrorPopup } =
    usePopupActions();

  const dispatch = useAppDispatch();
  const [forgetPasswordOTPRequest] = useForgetPasswordOTPMutation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgetPasswordOTPSchemaType>({
    resolver: zodResolver(forgetPasswordOTPSchema)
  });

  const onSubmit = async (data: { otp: string }) => {
    setIsSubmitted(true);
    const token = { token: data.otp };
    try {
      const response = await forgetPasswordOTPRequest(token);
      if ('data' in response) {
        const otpResponse = response?.data?.new_token;
        dispatch(forgetPasswordOTP({ email: email, otp: otpResponse }));
        navigate(RESET_PASSWORD_SCREEN_NAME);
      } else if ('error' in response) {
        
        if ('name' in response.error) {
          if (response.error.name == ERROR_NETWORK) {
            showNetworkErrorPopup(() => {
              onSubmit(data);
            });
          }
        } else {
          showInvalidCredentialPopup();
        }
      }
    } catch (err) {
      showNetworkErrorPopup(() => {
        onSubmit(data);
      });
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <ForgetPasswordOTP
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default ForgetPasswordOTPContainer;
