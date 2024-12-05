import React, { useEffect } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Loading from '../../../../components/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { useLazyGetHomeMemberQuery } from '../../../../store/api/memberApi';
import { newList } from '../../../../store/slices/trainingListSlice';
import {
  ERROR_NETWORK,
  PARSING_ERROR,
  UNAUTHENTICATED_STATUS
} from '../../../../utils/constants/errors';
import {
  LIST_EXERCISE_SCREEN_NAME,
  TRAINING_HISTORY_SCREEN_NAME,
  TRAINING_LIST_EXERCISE_SCREEN_NAME,
  TRAINING_MEMBER_STACK_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import { DETAILS_TRANING_LIST_SCREEN_NAME } from './../../../../utils/constants/screenName';
import Training from './Training';

/**
 * Container used to separate Training logic as a wrapper to Training screen
 * @returns JSX.Element
 */
interface TrainingContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof TRAINING_MEMBER_STACK_SCREEN_NAME
  > {}

const TrainingContainer: React.FC<TrainingContainerProps> = ({
  navigation
}): JSX.Element => {
  const trainingList = useAppSelector(
    (state) => state.listExercises.trainingList
  );
  // const [trigger, { data, error, isLoading }] =
  //   useLazyGetAllTrainingListQuery();

  const [trigger, { data, error, isLoading }] = useLazyGetHomeMemberQuery();

  useEffect(() => {
    trigger({});
  }, []);

  const lastThreeTraining = data?.latestThreeTraining;
  const popularTraining = data?.popularTraining;

  useEffect(() => {
    trigger({});
  }, []);

  const dispatch = useAppDispatch();
  const {
    showUnauthenticatedError,
    showInternalServerError,
    showLoadingError
  } = usePopupActions();

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

  const goToTrainingHistory = () => {
    navigation.push(TRAINING_HISTORY_SCREEN_NAME);
  };

  const goToTrainingDetail = (id: string) => {
    navigation.push(DETAILS_TRANING_LIST_SCREEN_NAME, {
      id: id
    });
  };

  return (
    <Training
      onRefresh={trigger}
      isLoading={isLoading}
      goToTrainingList={goToTrainingList}
      trainingList={trainingList}
      goToTrainingHistory={goToTrainingHistory}
      goToTrainingDetail={goToTrainingDetail}
      popularTraining={popularTraining}
      lastThreeTraining={lastThreeTraining}
    />
  );
};

export default TrainingContainer;
