import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';
import { fonts } from '../../../../../utils/constants/font';
import { fontSize } from '../../../../../utils/constants/fontSize';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import { WINDOW_HEIGHT } from '../../../../../utils/constants/layout';

export const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: MARGING_SPACING
  },
  centerAlign: {
    alignItems: 'center'
  },
  image: {
    height: WINDOW_HEIGHT / 3
  },
  forgetPasswordTitle: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    fontSize: fontSize.MEDIUM,
    maxWidth: '100%',
    textAlign: 'center',
    marginVertical: MARGING_SPACING
  },
  inputContainer: {
    marginVertical: MARGING_SPACING * 2
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  },
  forgotPasswordText: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    fontSize: fontSize.SMALL,
    color: colors.primary,
    alignSelf: 'flex-end'
  },
  sendButton: {
    backgroundColor: colors.primary,
    marginVertical: MARGING_SPACING * 2,
    shadowColor: colors.primary
  },
  sendButtonText: {
    color: colors.white,
    fontSize: fontSize.LARGE
  },
  createAccountButton: {
    padding: MARGING_SPACING
  },
  createAccountButtonText: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    color: colors.textDark,
    textAlign: 'center',
    fontSize: fontSize.SMALL
  }
});
