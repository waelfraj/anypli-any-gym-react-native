import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
import { WINDOW_HEIGHT } from '../../../../../../utils/constants/layout';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: WINDOW_HEIGHT / 3
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black
  },
  valueTextStyle: { color: colors['gray-900'] },
  topSpacing: { marginTop: MARGING_SPACING }
});
