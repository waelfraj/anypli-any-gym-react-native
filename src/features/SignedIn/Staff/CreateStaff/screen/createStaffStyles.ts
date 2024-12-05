import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';
import { fontSize } from '../../../../../utils/constants/fontSize';
import { fonts } from '../../../../../utils/constants/font';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';

const styles = StyleSheet.create({
  container: {
    padding: MARGING_SPACING,
    backgroundColor: colors.snowWhite,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH
  },
  sendButton: {
    padding: MARGING_SPACING,
    backgroundColor: colors.primary,
    marginVertical: MARGING_SPACING * 2,
    borderRadius: MARGING_SPACING,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: MARGING_SPACING
    },
    shadowOpacity: 0.3,
    shadowRadius: MARGING_SPACING
  },
  sendButtonText: {
    fontFamily: fonts.POPINS_BOLD,
    color: colors.textLight,
    textAlign: 'center',
    fontSize: fontSize.LARGE
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  }
});
export default styles;
