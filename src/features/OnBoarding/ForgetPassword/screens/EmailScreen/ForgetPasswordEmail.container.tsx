import React, { useState } from 'react';
import ForgetPasswordEmail from './ForgetPasswordEmail';
import {
  FORGET_PASSWORD_OTP_SCREEN_NAME,
  REGISTER_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import {
  ForgetPasswordEmailContainerProps,
  RequestEmail
} from '../../utils/types';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useForgetPasswordEmailMutation } from '../../../../../store/api/authApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  ForgetPasswordEmailSchemaType,
  forgetPasswordEmailSchema
} from '../../utils/forgetPasswordSchema';
import { forgetPasswordEmail } from '../../../../../store/slices/forgetPasswordSlice';

const ForgetPasswordEmailContainer: React.FC<
  ForgetPasswordEmailContainerProps
> = ({ navigation: { navigate } }): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useAppDispatch();
  const [forgetPasswordEmailRequest] = useForgetPasswordEmailMutation();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgetPasswordEmailSchemaType>({
    resolver: zodResolver(forgetPasswordEmailSchema)
  });

  const goToRegister = () => {
    navigate(REGISTER_SCREEN_NAME);
  };

  const onSubmit = async (email: RequestEmail) => {
    setIsSubmitted(true);
    try {
      await forgetPasswordEmailRequest({ email: email.email });
      navigate(FORGET_PASSWORD_OTP_SCREEN_NAME);
      dispatch(forgetPasswordEmail({ email: email.email, otp: '' }));
    } catch (err) {
    } finally {
      setIsSubmitted(false);
    }
  };
  return (
    <ForgetPasswordEmail
      goToRegister={goToRegister}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default ForgetPasswordEmailContainer;
