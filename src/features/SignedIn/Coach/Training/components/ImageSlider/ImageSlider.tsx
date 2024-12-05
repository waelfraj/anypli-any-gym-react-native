import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { useAppSelector } from '../../../../../../hooks/hooks';
import styles from './imageSliderStyles';
import RenderItemImageSlider from './RenderItemImageSlider';
import {
  AUTOPLAY_INTERVAL,
  FIRST_ITEM,
  ITEM_WIDTH,
  SLIDER_WIDTH
} from './constants';

const ImageSlider = () => {
  const trainingList = useAppSelector(
    (state) => state.listExercises.trainingList
  );

  return (
    <Carousel
      data={trainingList.slice(0, 5)}
      loop={true}
      renderItem={({ item }) => <RenderItemImageSlider item={item} />}
      autoplay={true}
      hasParallaxImages={true}
      sliderWidth={SLIDER_WIDTH}
      firstItem={FIRST_ITEM}
      autoplayInterval={AUTOPLAY_INTERVAL}
      itemWidth={ITEM_WIDTH}
      slideStyle={styles.slide}
    />
  );
};

export default ImageSlider;
