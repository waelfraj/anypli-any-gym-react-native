import React from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import DetailsTraningList from './DetailsTraningList';
import { useAppSelector } from '../../../../../hooks/hooks';
import { Exercise } from '../../../../../models/Exercise';
import {
  ADD_EXERCISE_SCREEN_NAME,
  DETAILS_TRANING_LIST_SCREEN_NAME
} from './../../../../../utils/constants/screenName';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import { strings } from '../../../../../locales/i18n';

/**
 * Container used to separate DetailsTraningList logic as a wrapper to DetailsTraningList screen
 * @returns JSX.Element
 */
interface DetailsTraningListContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof DETAILS_TRANING_LIST_SCREEN_NAME
  > {}

const DetailsTraningListContainer: React.FC<
  DetailsTraningListContainerProps
> = ({ navigation, route }): JSX.Element => {
  const { id } = route.params;

  const training = useAppSelector((state) => state.listExercises.trainingList);
  const trainingItem = training.find((item) => item.id === id);

  let exercises: Exercise[] = [];
  if (trainingItem) {
    exercises = trainingItem.exercises;
  }

  const goToAddExercise = () => {
    navigation.navigate(ADD_EXERCISE_SCREEN_NAME, { trainingList: id });
  };
  const dataRow = [
    {
      text: strings('level.' + trainingItem?.difficulty),
      icon: 'cellular-outline'
    },
    {
      text: trainingItem?.total_calories ? trainingItem?.total_calories : 0,
      icon: 'calculator-outline'
    },
    {
      text: trainingItem?.exercises.length,
      icon: 'footsteps-outline'
    },
    {
      text: trainingItem?.createdAt,
      icon: 'calendar-number-outline'
    },
    {
      text: trainingItem?.isReserved,
      icon: trainingItem?.isReserved ? 'lock-open-sharp' : 'lock-closed-sharp'
    }
  ];
  return (
    <DetailsTraningList
      dataRow={dataRow}
      training={trainingItem}
      exercises={exercises}
      goToAddExercise={goToAddExercise}
    />
  );
};

export default DetailsTraningListContainer;
