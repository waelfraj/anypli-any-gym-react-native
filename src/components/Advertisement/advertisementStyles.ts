import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import colors from '../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    height: 120,
    borderColor: colors['gray-200'],
    borderWidth: 1,
    margin: MARGING_SPACING,
    borderRadius: 10
  },
  image: {
    height: 120
  }
});
