import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';
import { WINDOW_HEIGHT } from '../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: MARGING_SPACING
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    backgroundColor: colors['gray-50'],
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 25,
    paddingBottom: 20
  },
  itemText: {
    fontSize: 14,
    color: colors.black
  },
  emptyItem: {
    backgroundColor: 'red',
    height: WINDOW_HEIGHT / 10,
    flex: 1
  }
});
