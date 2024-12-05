import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';

export default StyleSheet.create({
  rowContainer: {
    padding: MARGING_SPACING,
    flexDirection: 'row',
    marginVertical: 1
  },
  row: {
    flexDirection: 'row',
    marginVertical: 1,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: WINDOW_WIDTH / 4,
    resizeMode: 'cover',
    borderRadius: 8,
    marginEnd: MARGING_SPACING
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: MARGING_SPACING
  },
  levelText: {
    padding: 5,
    borderBottomLeftRadius: MARGING_SPACING,
    borderBottomRightRadius: MARGING_SPACING,
    position: 'absolute',
    backgroundColor: colors['teal-600'],
    color: colors.white
  },
  center: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  historyCard: {
    backgroundColor: colors['gray-50'],
    borderRadius: MARGING_SPACING,
    marginBottom: MARGING_SPACING
  },
  title: {
    paddingTop: MARGING_SPACING,
    fontSize: 16,
    color: colors.black,
    fontWeight: '400',
    letterSpacing: 1
  },
  rowText: {
    color: colors['gray-500'],
    fontSize: 14,
    fontWeight: '400',
    marginRight: MARGING_SPACING
  },
  trainingHistoryIcon: {
    color: colors['gray-500'],
    fontSize: 16,
    fontWeight: '400',
    marginRight: 5
  }
});
