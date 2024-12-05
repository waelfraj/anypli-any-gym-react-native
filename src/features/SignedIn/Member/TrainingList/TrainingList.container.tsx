import React, { useEffect, useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Loading from '../../../../components/Loading/Loading';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import {
  useLazyGetAllTrainingListQuery,
  useLazyGetTrainingListBytitleQuery
} from '../../../../store/api/trainingListsApi';
import { newList } from '../../../../store/slices/trainingListSlice';
import {
  ERROR_NETWORK,
  PARSING_ERROR,
  UNAUTHENTICATED_STATUS
} from '../../../../utils/constants/errors';
import { TRAINING_LIST_EXERCISE_SCREEN_NAME } from '../../../../utils/constants/screenName';
import TrainingList from './TrainingList';

/**
 * Container used to separate TrainingList logic as a wrapper to TrainingList screen
 * @returns JSX.Element
 */
interface TrainingListContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof TRAINING_LIST_EXERCISE_SCREEN_NAME
  > {}

const TrainingListContainer: React.FC<TrainingListContainerProps> = ({
  navigation
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const training = useAppSelector((state) => state.listExercises.trainingList);
  const [searchValue, setSearchValue] = useState<string>('');
  const [trigger, { data, error, isLoading }] =
    useLazyGetAllTrainingListQuery();
  const [searchTrigger, { data: searchData }] =
    useLazyGetTrainingListBytitleQuery();

  useEffect(() => {
    trigger();
  }, []);

  useEffect(() => {
    searchTrigger(searchValue);
  }, [searchValue]);

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

  const trainingListData =
    searchData && searchData.length > 0
      ? searchData
      : searchValue != ''
      ? []
      : training;

  return (
    <TrainingList
      onRefresh={trigger}
      isLoading={isLoading}
      cardItems={trainingListData}
      onSearchChange={setSearchValue}
    />
  );
};

export default TrainingListContainer;
