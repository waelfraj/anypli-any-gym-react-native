import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import colors from '../../../../utils/constants/colors';
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT
} from '../../../../utils/constants/layout';

export default StyleSheet.create({
  container: {
    marginTop: MARGING_SPACING,
    marginHorizontal: MARGING_SPACING
  },
  search: {
    width: '85%'
  },
  cardContainer: {
    marginBottom: MARGING_SPACING,
    width: WINDOW_WIDTH - MARGING_SPACING * 2,
    height: 200
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors['teal-400'],
    backgroundColor: colors.lightOrange,
    width: '85%',
    paddingHorizontal: MARGING_SPACING
  },
  center: {
    marginTop: MARGING_SPACING,
    alignItems: 'center',
    paddingBottom: 110
  },
  emptyContainer: {
    height: WINDOW_HEIGHT - 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
