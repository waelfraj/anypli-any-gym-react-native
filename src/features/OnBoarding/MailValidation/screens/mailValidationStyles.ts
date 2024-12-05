import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT } from '../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import { fonts } from '../../../../utils/constants/font';
import { fontSize } from '../../../../utils/constants/fontSize';
import colors from '../../../../utils/constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: MARGING_SPACING
  },
  centerAlign: {
    alignItems: 'center'
  },
  mailValidationImage: {
    height: WINDOW_HEIGHT / 3
  },
  OtpTitle: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    fontSize: fontSize.MEDIUM,
    maxWidth: '100%',
    textAlign: 'center',
    marginVertical: MARGING_SPACING
  },
  inputContainer: {
    marginVertical: MARGING_SPACING
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
  forwardButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: MARGING_SPACING
  },
  forwardButtonText: {
    color: colors.primary,
    fontSize: fontSize.MEDIUM
  },
  loginButton: {
    marginVertical: MARGING_SPACING
  },
  loginButtonText: {
    color: colors.primary,
    fontSize: fontSize.MEDIUM
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  },
  input: {
    fontFamily: fonts.POPINS_REGULAR,
    fontSize: fontSize.LARGE,
    paddingHorizontal: 15,
    paddingVertical: MARGING_SPACING * 2,
    backgroundColor: colors.lightOrange,
    borderRadius: MARGING_SPACING
  },
  inputFocused: {
    borderWidth: 3,
    borderColor: colors.primary,
    shadowOffset: { width: 4, height: MARGING_SPACING },
    shadowColor: colors.primary,
    shadowOpacity: 0.2,
    borderRadius: MARGING_SPACING,
    shadowRadius: MARGING_SPACING
  }
});
