import { View } from 'react-native';
import React from 'react';
import Schedule from '../components/Schedule/Schedule';
import styles from './trainingHistoryStyles';

interface TrainingHistoryProps {
  items: any;
  goToTrainingDetail: (id: string) => void;
}

const TrainingHistory: React.FC<TrainingHistoryProps> = ({
  items,
  goToTrainingDetail
}) => {
  return (
    <View style={styles.container}>
      <Schedule items={items} goToTrainingDetail={goToTrainingDetail} />
    </View>
  );
};

export default TrainingHistory;
