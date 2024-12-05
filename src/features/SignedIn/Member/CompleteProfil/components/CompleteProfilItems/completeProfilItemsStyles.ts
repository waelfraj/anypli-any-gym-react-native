import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { WINDOW_WIDTH } from '../../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around'
  },
  card: {
    backgroundColor: colors['gray-50'],
    padding: MARGING_SPACING,
    width: WINDOW_WIDTH / 1.3,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50
  },
  text: {
    fontSize: 16,
    fontWeight: '700'
  },
  radio: {
    width: 30,
    height: '100%',
    borderRadius: MARGING_SPACING
  },
  actif: {
    backgroundColor: colors['teal-500']
  },
  inactive: {
    borderWidth: 3,
    borderColor: colors['teal-500']
  }
});
