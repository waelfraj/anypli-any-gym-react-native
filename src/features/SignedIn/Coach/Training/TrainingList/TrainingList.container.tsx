import React, { useEffect, useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Loading from '../../../../../components/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import {
  useLazyGetTrainingListByCoachQuery,
  useLazyGetTrainingListBytitleQuery
} from '../../../../../store/api/trainingListsApi';
import { newList } from '../../../../../store/slices/trainingListSlice';
import {
  ERROR_NETWORK,
  PARSING_ERROR,
  UNAUTHENTICATED_STATUS
} from '../../../../../utils/constants/errors';
import {
  ADD_TRAINING_LIST_SCREEN_NAME,
  TRAINING_LIST_EXERCISE_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import TrainingList from './TrainingList';

/**
 * Container used to separate TrainingList logic as a wrapper to TrainingList screen
 * @returns JSX.Element
 */
interface TrainingListContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof TRAINING_LIST_EXERCISE_SCREEN_NAME
  > {}

const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  navigation
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const training = useAppSelector((state) => state.listExercises.trainingList);
  const [searchValue, setSearchValue] = useState<string>('');
  const [trigger, { data, error, isLoading }] =
    useLazyGetTrainingListByCoachQuery();
  const [searshTrigger, { data: searchData }] =
    useLazyGetTrainingListBytitleQuery();

  const {
    showUnauthenticatedError,
    showInternalServerError,
    showLoadingError
  } = usePopupActions();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    searshTrigger(searchValue);
  }, [searchValue]);

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

  const goToAddTrainingList = () => {
    navigation.navigate(ADD_TRAINING_LIST_SCREEN_NAME);
  };

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  let trainingListData: any;

  if (searchData && searchData.length > 0) {
    trainingListData = searchData;
  } else if (searchValue !== '') {
    trainingListData = [];
  } else {
    trainingListData = training;
  }

  return (
    <TrainingList
      onRefresh={trigger}
      isLoading={isLoading}
      goToAddTrainingList={goToAddTrainingList}
      cardItems={trainingListData}
      onSearchChange={setSearchValue}
    />
  );
};

export default TrainingListContainer;
