import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import colors from '../../../../../utils/constants/colors';
import { fonts } from '../../../../../utils/constants/font';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';
import { fontSize } from '../../../../../utils/constants/fontSize';

export default StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  contenu: {
    padding: MARGING_SPACING,
    borderRadius: MARGING_SPACING,
    margin: MARGING_SPACING,
    height: WINDOW_HEIGHT / 1.2,
    backgroundColor: colors.white,
    width: WINDOW_WIDTH - MARGING_SPACING * 2
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'flex-end'
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: colors['red-700'],
    fontSize: 40
  },
  image: {
    height: WINDOW_HEIGHT / 2,
    width: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: fonts.POPINS_BOLD,
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: fontSize.LARGE
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: fonts.POPINS_REGULAR,
    fontWeight: '600',
    textAlign: 'justify'
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.POPINS_REGULAR,
    fontWeight: '600',
    marginVertical: 10,
    marginLeft: 2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colorDataRow: {
    color: colors.primary
  }
});
