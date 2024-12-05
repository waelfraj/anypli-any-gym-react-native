import React from 'react';
import {
  GestureResponderEvent,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { strings } from '../../../../locales/i18n';
import { TrainingList } from '../../../../models/TrainingList';
import { HISTORY_ICON } from '../../../../utils/constants/icons';
import PopularWorkoutsCard from '../components/PopularWorkoutsCard/PopularWorkoutsCard';
import TrainingHistoryCard from '../components/TrainingHistoryCard/TrainingHistoryCard';
import styles from './trainingStyles';

/**
 * Represents Training screen ui
 * @returns JSX.Element
 */
interface TrainingProps {
  isLoading: boolean;
  onRefresh: any;
  goToTrainingList: ((event: GestureResponderEvent) => void) | undefined;
  trainingList: TrainingList[];
  goToTrainingHistory: () => void;
  goToTrainingDetail: any;
  popularTraining: any;
  lastThreeTraining: any;
}

const Training: React.FC<TrainingProps> = ({
  isLoading,
  onRefresh,
  goToTrainingList,
  trainingList,
  goToTrainingHistory,
  goToTrainingDetail,
  popularTraining,
  lastThreeTraining
}): JSX.Element => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.headerTitle}>
                {strings('training.readyTo')}
              </Text>
              <Text style={[styles.headerTitle, styles.headerSubTitle]}>
                {strings('labels.workout')}
              </Text>
            </View>
            <TouchableOpacity onPress={goToTrainingHistory}>
              <Icon name={HISTORY_ICON} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.spacing}>
            <View style={styles.grid}>
              <Text style={styles.categoryTitle}>
                {strings('labels.popularWorkouts')}
              </Text>
              <TouchableOpacity onPress={goToTrainingList}>
                <Text>{strings('actions.loadMore')}</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {popularTraining &&
                popularTraining.map((training: any) => (
                  <PopularWorkoutsCard item={training} key={training.id} />
                ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.spacing}>
          <View style={styles.grid}>
            <Text style={styles.categoryTitle}>
              {strings('labels.lastTrainingList')}
            </Text>
            <TouchableOpacity onPress={goToTrainingHistory}>
              <Text>{strings('actions.loadMore')}</Text>
            </TouchableOpacity>
          </View>
          {lastThreeTraining &&
            lastThreeTraining.map((training: any) => (
              <TrainingHistoryCard
                item={training}
                key={training.id}
                handleOnPress={goToTrainingDetail}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Training;
