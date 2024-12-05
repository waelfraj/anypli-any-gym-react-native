import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { strings } from '../../../../../locales/i18n';
import { TrainingList } from '../../../../../models/TrainingList';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import { useAddTrainingListMutation } from '../../../../../store/api/trainingListsApi';
import { addList } from '../../../../../store/slices/trainingListSlice';
import { ADD_TRAINING_LIST_SCREEN_NAME } from '../../../../../utils/constants/screenName';
import AddTrainingList from './AddTrainingList';

interface AddTrainingListContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof ADD_TRAINING_LIST_SCREEN_NAME
  > {}

const AddTrainingListContainer: React.FC<AddTrainingListContainerProps> = ({
  navigation
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
  const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

  const TrainingListSchema = z.object({
    title: z.string({ required_error: strings('errors.required_error') }),
    description: z.string({ required_error: strings('errors.required_error') }),
    difficulty: z.string({ required_error: strings('errors.required_error') }),
    image: z
      .any()
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, .png formats are supported.'
      )
  });

  type TrainingListSchemaType = z.infer<typeof TrainingListSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TrainingListSchemaType>({
    resolver: zodResolver(TrainingListSchema)
  });

  const { showAddedSuccess, showInternalServerError } = usePopupActions();
  const [addTrainingListMutation] = useAddTrainingListMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (requestData: TrainingList) => {
    setIsSubmitted(true);
    const formData = new FormData();

    try {
      formData.append('title', requestData.title);
      formData.append('difficulty', requestData.difficulty);
      formData.append('description', requestData.description);
      formData.append('image', {
        type: requestData.image.type,
        uri: requestData.image.uri,
        name: requestData.image.name
      });

      const response = await addTrainingListMutation(formData);

      if ('data' in response) {
        dispatch(addList(response.data));
        showAddedSuccess();
        reset();
      } else if ('error' in response) {
        showInternalServerError();
      }
    } catch (error) {
      console.error('Error adding training list:', error);
      showInternalServerError(); // Show generic error message
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <AddTrainingList
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default AddTrainingListContainer;
