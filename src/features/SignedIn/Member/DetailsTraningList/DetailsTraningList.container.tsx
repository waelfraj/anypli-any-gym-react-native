import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import DetailsTraningList from './DetailsTraningList';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { DETAILS_TRANING_LIST_SCREEN_NAME } from '../../../../utils/constants/screenName';
import { useAppSelector } from '../../../../hooks/hooks';
import { Exercise } from '../../../../models/Exercise';
import { strings } from '../../../../locales/i18n';
import { useAttachMemberToTrainingListMutation } from '../../../../store/api/memberApi';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import Loading from '../../../../components/Loading/Loading';
import {
  CALORIES_ICON,
  DATE_ICON,
  EXERCISES_ICON,
  LEVEL_ICON,
  LOCK_CLOSE_ICON,
  LOCK_OPEN_ICON
} from '../../../../utils/constants/icons';

/**
 * Container used to separate DetailsTraningList logic as a wrapper to DetailsTraningList screen
 * @returns JSX.Element
 */
interface DetailsTraningListContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof DETAILS_TRANING_LIST_SCREEN_NAME
  > {}

const DetailsTraningListContainer: React.FC<
  DetailsTraningListContainerProps
> = ({ navigation, route }): JSX.Element => {
  const { id } = route.params;
  const [attachMemberToTrainingList] = useAttachMemberToTrainingListMutation();
  const training = useAppSelector((state) => state.listExercises.trainingList);
  const trainingItem = training.find((item) => item.id === id);
  const [isLoading, setIsLoading] = useState(false);
  const { showAddedSuccess, showInternalServerError } = usePopupActions();

  let exercises: Exercise[] = [];
  if (trainingItem) {
    exercises = trainingItem.exercises;
  }

  const dataRow = [
    {
      text: strings('level.' + trainingItem?.difficulty),
      icon: LEVEL_ICON
    },
    {
      text: trainingItem?.total_calories ? trainingItem?.total_calories : 0,
      icon: CALORIES_ICON
    },
    {
      text: trainingItem?.exercises.length,
      icon: EXERCISES_ICON
    },
    {
      text: trainingItem?.createdAt,
      icon: DATE_ICON
    },
    {
      text: trainingItem?.isReserved,
      icon: trainingItem?.isReserved ? LOCK_OPEN_ICON : LOCK_CLOSE_ICON
    }
  ];

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (trainingItem && 'id' in trainingItem) {
        const response = await attachMemberToTrainingList(trainingItem.id);

        if ('data' in response) {
          showAddedSuccess();
        } else {
          showInternalServerError();
        }
      }
    } catch (err) {
      showInternalServerError();
    } finally {
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <DetailsTraningList
      dataRow={dataRow}
      training={trainingItem}
      exercises={exercises}
      onSubmit={onSubmit}
    />
  );
};

export default DetailsTraningListContainer;
