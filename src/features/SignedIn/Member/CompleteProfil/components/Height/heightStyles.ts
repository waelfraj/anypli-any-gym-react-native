import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: { alignItems: 'center' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: MARGING_SPACING,
    color: colors.black
  },
  valueTextStyle: { color: colors['gray-900'] },
  topSpacing: { marginTop: MARGING_SPACING }
});
