import React, { useState } from 'react';
import CreateStaff from './CreateStaff';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateStaffSchema,
  CreateStaffSchemaType
} from '../utils/createStaffSchema';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { useCreateStaffMutation } from '../../../../../store/api/staffApi';
import {
  ERROR_NETWORK,
  UNAUTHENTICATED_STATUS,
  UNPROCESSABLE_ENTITY_STATUS
} from '../../../../../utils/constants/errors';
import { CreateStaffRequest } from '../../../../../models/Staff';
import { incrementNbrUser } from '../../../../../store/slices/homeStaffSlice';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { rolesName } from '../../../../../enums/roles';

const CreateStaffContainer = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    showInvalidCredentialPopup,
    showNetworkErrorPopup,
    showCreatedSuccess,
    showInternalServerError,
    showUnauthenticatedError,
    showInvalidEmailPopup
  } = usePopupActions();
  const [createStaff] = useCreateStaffMutation();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CreateStaffSchemaType>({
    resolver: zodResolver(CreateStaffSchema)
  });

  const onSubmit = async (formData: CreateStaffRequest) => {
    setIsSubmitted(true);
    const requestData = {
      name: formData.username,
      email_valid: false,
      ...formData
    };
    try {
      const response = await createStaff(requestData);
      if ('data' in response) {
        showCreatedSuccess();
        dispatch(incrementNbrUser(rolesName.STAFFS));
        reset();
      } else if ('error' in response) {
        if ('status' in response.error) {
          if (response.error.status === UNAUTHENTICATED_STATUS) {
            showUnauthenticatedError();
          } else if (response.error.status === UNPROCESSABLE_ENTITY_STATUS) {
            if (
              response.error.data &&
              typeof response.error.data === 'object' &&
              'errors' in response.error.data &&
              response.error.data.errors &&
              typeof response.error.data.errors === 'object' &&
              'email' in response.error.data.errors
            ) {
              const emailError = response.error.data.errors.email;
              if (emailError) {
                showInvalidEmailPopup();
              }
            } else {
              showInvalidCredentialPopup();
            }
          }
        } else if ('name' in response.error) {
          if (response.error.name === ERROR_NETWORK) {
            showNetworkErrorPopup(() => {
              onSubmit(requestData);
            });
          }
        } else {
          showInternalServerError();
        }
      }
    } catch (error) {
      showInternalServerError();
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <CreateStaff
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default CreateStaffContainer;
