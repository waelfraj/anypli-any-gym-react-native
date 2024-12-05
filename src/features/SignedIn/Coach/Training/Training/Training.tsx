import React from 'react';
import {
  GestureResponderEvent,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './trainingStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { EXERCISE_CATEGORY } from '../../../../../utils/constants/exercices';
import { strings } from './../../../../../locales/i18n';
import { TRAINING_LIST_ICON } from '../../../../../utils/constants/icons';
/**
 * Represents Training screen ui
 * @returns JSX.Element
 */
interface TrainingProps {
  isLoading: boolean;
  onRefresh: () => void;
  goToTrainingList: ((event: GestureResponderEvent) => void) | undefined;
  goToListExerciseByCategory: (key: string | undefined) => void;
}

const Training: React.FC<TrainingProps> = ({
  isLoading,
  onRefresh,
  goToTrainingList,
  goToListExerciseByCategory
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

            <TouchableOpacity onPress={goToTrainingList}>
              <Icon name={TRAINING_LIST_ICON} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <ImageSlider />
        </View>
        <View style={styles.spacing}>
          <Text style={styles.categoryTitle}>
            {strings('labels.exercisesCategories')}
          </Text>
          <View>
            <View style={styles.grid}>
              {EXERCISE_CATEGORY &&
                EXERCISE_CATEGORY.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => goToListExerciseByCategory(item.key)}
                    key={item.name}
                    style={
                      index % 2 === 0
                        ? styles.itemContainer
                        : styles.itemContainerSecond
                    }>
                    <Text>{item.name}</Text>
                    <View style={styles.imageContainer}>
                      <Image source={item.image} style={styles.image} />
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Training;
