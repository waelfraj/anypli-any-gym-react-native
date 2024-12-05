import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import colors from '../../../../utils/constants/colors';
import { fonts } from '../../../../utils/constants/font';
import { fontSize } from '../../../../utils/constants/fontSize';
import {
  WINDOW_WIDTH,
  WINDOW_HEIGHT
} from '../../../../utils/constants/layout';

export const styles = StyleSheet.create({
  container: {
    padding: MARGING_SPACING
  },
  centerAlign: {
    alignItems: 'center'
  },
  logo: {
    height: WINDOW_HEIGHT / 5
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputContainer: {
    width: WINDOW_WIDTH / 2.3
  },
  descriptionText: {
    fontFamily: fonts.POPINS_REGULAR,
    fontSize: fontSize.SMALL,
    maxWidth: '80%',
    textAlign: 'center',
    marginVertical: MARGING_SPACING
  },
  titleRadioBox: {
    fontSize: fontSize.MEDIUM,
    fontWeight: 'bold'
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  },
  button: {
    marginHorizontal: MARGING_SPACING,
    backgroundColor: colors.primary,
    shadowColor: colors.primary
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.LARGE
  },
  loginLink: {
    padding: MARGING_SPACING
  },
  loginText: {
    fontFamily: fonts.POPINS_SEMI_BOLD,
    color: colors.textDark,
    textAlign: 'center',
    fontSize: fontSize.SMALL
  },
  spacingFooter: { marginBottom: MARGING_SPACING }
});
