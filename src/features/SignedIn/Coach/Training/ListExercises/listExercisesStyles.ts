import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from '../../../../../utils/constants/layout';

export default StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT - 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainerStyle: {
    margin: 16
  },
  pagination: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignContent: 'center'
  }
});
