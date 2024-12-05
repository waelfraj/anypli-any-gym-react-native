import { StyleSheet } from 'react-native';
import { SLIDER_HEIGHT, ITEM_WIDTH, SLIDER_WIDTH } from './constants';

export default StyleSheet.create({
  image: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT
  },
  slide: {
    display: 'flex',
    alignItems: 'center'
  },
  cardContainer: {
    width: ITEM_WIDTH,
    height: SLIDER_HEIGHT
  }
});
