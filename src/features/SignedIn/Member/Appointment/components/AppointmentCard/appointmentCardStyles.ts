import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { WINDOW_WIDTH } from '../../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    borderRadius: MARGING_SPACING,
    marginTop: MARGING_SPACING,
    flexDirection: 'row',
    width: WINDOW_WIDTH / 1.3,
    padding: 10,
    marginRight: 10
  },
  trait: {
    width: 10
  },
  cardContainer: {
    margin: MARGING_SPACING,
    width: '90%'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black
  },
  desc: {
    fontSize: 12,
    color: colors['gray-600']
  },
  count: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});
