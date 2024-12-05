import React, { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { EditProfilRequest } from '../../../../../models/Staff';
import { useEditStaffProfilMutation } from '../../../../../store/api/staffApi';
import { editAuthUser } from '../../../../../store/slices/authSlice';
import { ERROR_NETWORK } from '../../../../../utils/constants/errors';
import {
  EditProfilSchema,
  EditProfilSchemaType
} from '../utils/editProfilSchema';
import EditProfil from './EditProfil';

const EditProfilContainer = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    showInvalidCredentialPopup,
    showNetworkErrorPopup,
    showUpdatedSuccess
  } = usePopupActions();

  const [editProfilStaff] = useEditStaffProfilMutation();
  const username = useAppSelector((state) => state.auth.user.username);
  const address = useAppSelector((state) => state.auth.user.address);
  const email = useAppSelector((state) => state.auth.user.email);
  const phone = useAppSelector((state) => state.auth.user.phone);
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EditProfilSchemaType>({
    resolver: zodResolver(EditProfilSchema)
  });

  useEffect(() => {
    reset({
      username,
      phone: phone?.toString(),
      address: address,
      email
    });
  }, [username, address, email, phone, reset]);

  const onSubmit = async (formData: EditProfilRequest) => {
    setIsSubmitted(true);
    const requestData = {
      name: formData.username,
      ...formData
    };

    try {
      const response = await editProfilStaff(requestData);
      if ('data' in response) {
        showUpdatedSuccess();
        let data = {
          username: requestData.username,
          phone: requestData.phone,
          address: requestData.address,
          email: requestData.email
        };
        dispatch(editAuthUser(data));

        reset();
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

  return (
    <EditProfil
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default EditProfilContainer;
