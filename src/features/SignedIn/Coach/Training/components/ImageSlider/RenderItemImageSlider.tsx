import { View } from 'react-native';
import React, { memo } from 'react';
import { ListExercise } from '../../../../../../models/TrainingList';
import styles from './imageSliderStyles';
import TrainingListCarContainer from '../TrainingListCard/TrainingListCar.container';

const RenderItemImageSlider = ({ item }: { item: ListExercise }) => {
  return (
    <View style={styles.cardContainer}>
      <TrainingListCarContainer item={item} />
    </View>
  );
};

export default memo(RenderItemImageSlider);
