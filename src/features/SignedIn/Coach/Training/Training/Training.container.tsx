import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import Loading from '../../../../../components/Loading/Loading';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import { useLazyGetTrainingListByCoachQuery } from '../../../../../store/api/trainingListsApi';
import { newList } from '../../../../../store/slices/trainingListSlice';
import {
  ERROR_NETWORK,
  PARSING_ERROR,
  UNAUTHENTICATED_STATUS
} from '../../../../../utils/constants/errors';
import {
  LIST_EXERCISE_SCREEN_NAME,
  TRAINING_LIST_EXERCISE_SCREEN_NAME,
  type TRAINING_COACH_STACK_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import Training from './Training';

interface TrainingListContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof TRAINING_COACH_STACK_SCREEN_NAME
  > {}

const TrainingContainer: React.FC<TrainingListContainerProps> = ({
  navigation
}): JSX.Element => {
  const [trigger, { data, error, isLoading }] =
    useLazyGetTrainingListByCoachQuery();
  const dispatch = useAppDispatch();
  const {
    showUnauthenticatedError,
    showInternalServerError,
    showLoadingError
  } = usePopupActions();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(newList(data));
    }
  }, [data]);

  useEffect(() => {
    if (
      error !== undefined &&
      'status' in error &&
      error.status === UNAUTHENTICATED_STATUS
    ) {
      showUnauthenticatedError();
    } else if (
      error !== undefined &&
      'name' in error &&
      error.name === ERROR_NETWORK
    ) {
      showInternalServerError();
    } else if (
      error != undefined &&
      'status' in error &&
      error.status != PARSING_ERROR
    ) {
      showLoadingError();
    }
  }, [error]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  const goToTrainingList = () => {
    navigation.navigate(TRAINING_LIST_EXERCISE_SCREEN_NAME);
  };

  const goToListExerciseByCategory = (key: string | undefined) => {
    navigation.navigate(LIST_EXERCISE_SCREEN_NAME, {
      category: key
    });
  };

  return (
    <Training
      onRefresh={trigger}
      isLoading={isLoading}
      goToTrainingList={goToTrainingList}
      goToListExerciseByCategory={goToListExerciseByCategory}
    />
  );
};

export default TrainingContainer;
