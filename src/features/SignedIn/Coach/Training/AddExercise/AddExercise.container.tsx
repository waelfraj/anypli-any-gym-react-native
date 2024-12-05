import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useAddExerciseMutation } from '../../../../../store/api/exerciseApi';
import { Exercise } from '../../../../../models/Exercise';
import { ADD_EXERCISE_SCREEN_NAME } from '../../../../../utils/constants/screenName';
import { strings } from '../../../../../locales/i18n';
import { addExerciseToList } from '../../../../../store/slices/trainingListSlice';
import AddExercise from './AddExercise';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';

interface AddExerciseContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof ADD_EXERCISE_SCREEN_NAME
  > {}

const AddExerciseContainer: React.FC<AddExerciseContainerProps> = ({
  route
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const trainingListId = route.params.trainingList;

  //TODO:change this to constant file
  const ExerciseSchema = z.object({
    title: z.string({ required_error: strings('errors.required_error') }),
    description: z.string({ required_error: strings('errors.required_error') }),
    difficulty: z.string({ required_error: strings('errors.required_error') }),
    image: z.string({ required_error: strings('errors.required_error') }),
    category: z.string({ required_error: strings('errors.required_error') }),
    calories: z.string({ required_error: strings('errors.required_error') }),
    sets: z.string({ required_error: strings('errors.required_error') })
  });

  type ExerciseSchemaType = z.infer<typeof ExerciseSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ExerciseSchemaType>({ resolver: zodResolver(ExerciseSchema) });
  const { showAddedSuccess } = usePopupActions();
  const [addExerciseMutation] = useAddExerciseMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: Exercise) => {
    setIsSubmitted(true);

    const request = {
      ...formData,
      trainingListId: trainingListId
    };

    try {
      const response = await addExerciseMutation(request);
      if ('data' in response) {
        dispatch(
          addExerciseToList({
            exercise: response.data,
            listId: trainingListId
          })
        );
        showAddedSuccess();
        reset();
      }
    } catch (error) {
      console.error('Error adding exercise:', error);
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <AddExercise
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      isSubmitted={isSubmitted}
    />
  );
};

export default AddExerciseContainer;
