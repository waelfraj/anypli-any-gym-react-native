import React, { useEffect, useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { AgendaSchedule } from 'react-native-calendars';
import Loading from '../../../../components/Loading/Loading';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { useLazyGetMemberTrainingListQuery } from '../../../../store/api/memberApi';
import {
  DETAILS_TRANING_LIST_SCREEN_NAME,
  TRAINING_HISTORY_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import TrainingHistory from './TrainingHistory';
import { formatAgendaItemsData } from './utils/utils';

/**
 * Container used to separate TrainingHistory logic as a wrapper to TrainingHistory screen
 * @returns JSX.Element
 */
interface TrainingHistoryContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof TRAINING_HISTORY_SCREEN_NAME
  > {}

const TrainingHistoryContainer: React.FC<TrainingHistoryContainerProps> = ({
  navigation
}) => {
  const [trigger, { data, isLoading, error }] =
    useLazyGetMemberTrainingListQuery({});
  const [formattedData, setFormattedData] = useState<
    AgendaSchedule | undefined
  >(undefined);

  useEffect(() => {
    trigger({});
  }, []);

  useEffect(() => {
    if (data) {
      const formattedList = formatAgendaItemsData(data);
      setFormattedData(formattedList);
    }
  }, [data]);

  const goToTrainingDetail = (id: string) => {
    navigation.push(DETAILS_TRANING_LIST_SCREEN_NAME, {
      id: id
    });
  };

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <TrainingHistory
      items={formattedData}
      goToTrainingDetail={goToTrainingDetail}
    />
  );
};

export default TrainingHistoryContainer;
