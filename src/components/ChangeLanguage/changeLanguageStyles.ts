import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import { WINDOW_HEIGHT } from '../../utils/constants/layout';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors['gray-50'],
    margin: MARGING_SPACING
  },
  active: {
    height: 60,
    backgroundColor: colors.primary,
    width: '48%',
    shadowColor: colors.primary,
    justifyContent: 'center',
    alignContent: 'center'
  },
  activeText: {
    color: colors.white,
    fontSize: 24
  },
  inactive: {
    height: 60,
    backgroundColor: colors.lightOrange,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '48%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  inactiveText: {
    color: colors.textDark,
    fontSize: 24
  }
});
