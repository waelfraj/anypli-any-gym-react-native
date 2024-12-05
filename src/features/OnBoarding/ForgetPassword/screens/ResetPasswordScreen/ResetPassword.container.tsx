import React, { useState } from 'react';
import ResetPassword from './ResetPassword';
import { ResetPasswordContainerProps } from '../../utils/types';
import { LOGIN_SCREEN_NAME } from '../../../../../utils/constants/screenName';
import { useAppSelector } from '../../../../../hooks/hooks';
import { useForgetPasswordResetMutation } from '../../../../../store/api/authApi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgetPasswordResetSchemaType,
  forgetPasswordResetSchema
} from '../../utils/forgetPasswordSchema';
import { usePopupActions } from '../../../../../hooks/usePopupActions';

const ResetPasswordContainer: React.FC<ResetPasswordContainerProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const resetData = useAppSelector((state) => state.forgePassword);
  const [forgetPasswordResetRequest] = useForgetPasswordResetMutation();
  const {
    showNetworkErrorPopup,
    showPasswordSuccessPopup,
    showInvalidCredentialPopup
  } = usePopupActions();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgetPasswordResetSchemaType>({
    resolver: zodResolver(forgetPasswordResetSchema)
  });

  const onSubmit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    setIsSubmitted(true);
    const requestData = {
      token: resetData.otp,
      email: resetData.email,
      ...data
    };

    try {
      const response = await forgetPasswordResetRequest(requestData);
      if ('data' in response) {
        showPasswordSuccessPopup(() => {
          navigate(LOGIN_SCREEN_NAME);
        });
      } else {
        showInvalidCredentialPopup();
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
    <ResetPassword
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default ResetPasswordContainer;
