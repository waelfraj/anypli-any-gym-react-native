import React, { useEffect, useState } from 'react';
import MailValidation from './MailValidation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  MailValidationSchemaType,
  mailValidationSchema
} from '../utils/emailValidationSchema';
import {
  useCheckMailValidationMutation,
  useLogoutMutation,
  useSendMailValidationMutation
} from '../../../../store/api/authApi';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { logout, mailValidation } from '../../../../store/slices/authSlice';
import { ERROR_NETWORK } from '../../../../utils/constants/errors';
import {
  MailValidationContainerProps,
  EmailValidationRequest
} from '../utils/types';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import {
  removeToken,
  retrieveToken
} from '../../../../utils/helpers/useSensitiveInfo';

const MailValidationContainer: React.FC<MailValidationContainerProps> = ({
  navigation
}): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [forward, setForward] = useState(false);
  const [sendMailValidation] = useSendMailValidationMutation();
  const [checkMailValidation] = useCheckMailValidationMutation();
  const email = useAppSelector((state) => state.auth.user.email);
  const [logoutRequest] = useLogoutMutation();
  const [registerToken, setRegisterToken] = useState('');

  const setRegisterTokenFromAsyncFunction = async () => {
    const retrievedToken = await retrieveToken();
    if (retrievedToken) {
      setRegisterToken(retrievedToken);
    }
  };
  setRegisterTokenFromAsyncFunction();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const sendMail = async () => {
      await sendMailValidation({
        email: email
      });
    };
    if (email) {
      sendMail();
    }
  }, [email, forward]);

  const { showInvalidCredentialPopup, showNetworkErrorPopup } =
    usePopupActions();

  const handleForward = () => {
    setForward(!forward);
  };

  const handleLogin = async () => {
    await logoutRequest(registerToken);
    removeToken();
    dispatch(logout());
  };

  const onSubmit = async (data: EmailValidationRequest) => {
    setIsSubmitted(true);
    const token = { token: data.otp };
    try {
      const response = await checkMailValidation(token);
      if ('data' in response) {
        dispatch(mailValidation());
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
      showInvalidCredentialPopup();
    } finally {
      setIsSubmitted(false);
    }
  };
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<MailValidationSchemaType>({
    resolver: zodResolver(mailValidationSchema)
  });

  return (
    <MailValidation
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
      handleForward={handleForward}
      handleLogin={handleLogin}
    />
  );
};

export default MailValidationContainer;
