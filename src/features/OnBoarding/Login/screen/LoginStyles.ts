import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from './../../../../utils/constants/spacing';
import colors from './../../../../utils/constants/colors';
import { fonts } from './../../../../utils/constants/font';
import { fontSize } from './../../../../utils/constants/fontSize';
import { WINDOW_HEIGHT } from '../../../../utils/constants/layout';

export const styles = StyleSheet.create({
  container: {
    padding: MARGING_SPACING
  },
  centerAlign: {
    alignItems: 'center'
  },
  logo: {
    height: WINDOW_HEIGHT / 4
  },
  welcomeText: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    fontSize: fontSize.LARGE,
    maxWidth: '60%',
    textAlign: 'center',
    color: colors.textDark
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
    color: colors.darkOrange,
    alignSelf: 'flex-end'
  },
  signInButton: {
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
  signInButtonText: {
    fontFamily: fonts.POPINS_BOLD,
    color: colors.textLight,
    textAlign: 'center',
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
