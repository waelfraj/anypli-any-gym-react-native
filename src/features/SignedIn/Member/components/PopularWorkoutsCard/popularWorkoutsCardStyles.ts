import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';
import { fonts } from '../../../../../utils/constants/font';
import { fontSize } from '../../../../../utils/constants/fontSize';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT / 4,
    width: WINDOW_WIDTH / 1.4,
    marginEnd: MARGING_SPACING,
    borderRadius: MARGING_SPACING
  },
  image: {
    height: WINDOW_HEIGHT / 4,
    width: WINDOW_WIDTH / 1.4,
    resizeMode: 'cover',
    borderRadius: MARGING_SPACING
  },
  overlay: {
    borderRadius: MARGING_SPACING,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  header: {
    margin: MARGING_SPACING
  },
  title: {
    width: '50%',
    color: colors.white,
    fontSize: fontSize.LARGE,
    fontFamily: fonts.POPINS_BOLD,
    paddingBottom: 24
  },
  description: {
    alignSelf: 'flex-start',
    padding: 5,
    marginBottom: 10,
    borderRadius: MARGING_SPACING,
    backgroundColor: colors['gray-50'],
    color: colors['gray-500'],
    fontSize: fontSize.SMALL
  }
});
