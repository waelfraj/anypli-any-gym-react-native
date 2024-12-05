import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { useCreateAdvetisementMutation } from '../../../../../store/api/createAdvertisementApi';
import {
  ERROR_NETWORK,
  UNAUTHENTICATED_STATUS
} from '../../../../../utils/constants/errors';
import {
  createAdvertisementSchema,
  createAdvertisementType
} from '../utils/schema';
import CreateAdvertisement, {
  CreateAdvertisementRequest
} from './CreateAdvertisement';

const CreateAdvertisementContainer: React.FC = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<createAdvertisementType>({
    resolver: zodResolver(createAdvertisementSchema)
  });

  const {
    showInvalidCredentialPopup,
    showInternalServerError,
    showNetworkErrorPopup,
    showCreatedSuccess,
    showUnauthenticatedError
  } = usePopupActions();

  const [createAdvertisement] = useCreateAdvetisementMutation();
  const onSubmit = async (requestData: CreateAdvertisementRequest) => {
    setIsSubmitted(true);

    const formData = new FormData();
    formData.append('name', requestData.name);
    formData.append('description', requestData.description);
    formData.append('image', {
      type: requestData.image.type,
      uri: requestData.image.uri,
      name: requestData.image.name
    });

    try {
      const response = await createAdvertisement(formData);

      if ('data' in response) {
        showCreatedSuccess();
        reset();
      } else if ('error' in response) {
        if ('status' in response.error) {
          if (response.error.status === UNAUTHENTICATED_STATUS) {
            showUnauthenticatedError();
          } else {
            showInvalidCredentialPopup();
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
    <CreateAdvertisement
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default CreateAdvertisementContainer;
