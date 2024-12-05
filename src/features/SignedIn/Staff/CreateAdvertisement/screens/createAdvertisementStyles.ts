import { StyleSheet } from 'react-native';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';
import { fontSize } from '../../../../../utils/constants/fontSize';
import colors from '../../../../../utils/constants/colors';

export default StyleSheet.create({
  image: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT / 2.5,
    marginBottom: 10
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  }
});
