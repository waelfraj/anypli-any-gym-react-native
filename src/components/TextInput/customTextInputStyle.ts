import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import colors from '../../utils/constants/colors';
import { fonts } from '../../utils/constants/font';
import { fontSize } from '../../utils/constants/fontSize';

export const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.POPINS_REGULAR,
    fontSize: fontSize.SMALL,
    padding: MARGING_SPACING,
    backgroundColor: colors['orange-50'],
    borderRadius: MARGING_SPACING,
    marginVertical: 10
  },
  inputFocused: {
    borderWidth: 3,
    borderColor: colors.primary,
    shadowOffset: { width: 4, height: MARGING_SPACING },
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: MARGING_SPACING
  },
  inputError: {
    borderWidth: 3,
    borderColor: colors.errorRed,
    shadowOffset: { width: 4, height: MARGING_SPACING },
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: MARGING_SPACING
  }
});
