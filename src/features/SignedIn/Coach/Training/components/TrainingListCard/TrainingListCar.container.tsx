import React from 'react';
import { ListExercise } from '../../../../../../models/TrainingList';
import { useNavigation } from '@react-navigation/native';
import { CoachStackScreenProps } from '../../../../../../navigations/Coach/CoachStackParamList';
import { DETAILS_TRANING_LIST_SCREEN_NAME } from '../../../../../../utils/constants/screenName';
import Card from './Card';
import { strings } from './../../../../../../locales/i18n';

interface CardProps {
  item: ListExercise;
}

const TrainingListCarContainer: React.FC<CardProps> = ({ item }) => {
  const navigation =
    useNavigation<
      CoachStackScreenProps<typeof DETAILS_TRANING_LIST_SCREEN_NAME>
    >();

  const handleOnPress = () =>
    navigation.navigate(DETAILS_TRANING_LIST_SCREEN_NAME, {
      id: item.id
    });

  const dataRow = [
    {
      text: strings('level.' + item.difficulty),
      icon: 'cellular-outline'
    },
    {
      text: item.total_calories ? item.total_calories : 0,
      icon: 'calculator-outline'
    },
    {
      text: item.exercises.length,
      icon: 'footsteps-outline'
    },
    {
      text: item.createdAt,
      icon: 'calendar-number-outline'
    },
    {
      text: item.isReserved,
      icon: item.isReserved ? 'lock-open-sharp' : 'lock-closed-sharp'
    }
  ];
  return <Card handleOnPress={handleOnPress} dataRow={dataRow} item={item} />;
};

export default TrainingListCarContainer;
