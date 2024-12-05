import { StyleSheet } from 'react-native';
import { fontSize } from '../../../../utils/constants/fontSize';
import colors from '../../../../utils/constants/colors';
import { fonts } from '../../../../utils/constants/font';
import { MARGING_SPACING } from './../../../../utils/constants/spacing';
import { WINDOW_HEIGHT } from '../../../../utils/constants/layout';

export const styles = StyleSheet.create({
  backgroundImage: {
    marginVertical: MARGING_SPACING * 2,
    height: WINDOW_HEIGHT / 2.5
  },
  container: {
    paddingHorizontal: MARGING_SPACING * 2,
    paddingTop: MARGING_SPACING * 2
  },
  title: {
    fontSize: fontSize.XLARGE,
    color: colors.primary,
    fontFamily: fonts.POPINS_BOLD,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: fontSize.SMALL,
    color: colors.textDark,
    fontFamily: fonts.POPINS_REGULAR,
    textAlign: 'center',
    marginTop: MARGING_SPACING
  },
  buttonContainer: {
    paddingHorizontal: MARGING_SPACING,
    paddingTop: MARGING_SPACING * 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '48%',
    shadowColor: colors.primary
  },
  loginText: {
    color: colors.white,
    fontSize: fontSize.LARGE
  },
  registerButton: {
    backgroundColor: colors.lightOrange,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '48%'
  },
  regiterText: {
    color: colors.textDark,
    fontSize: fontSize.LARGE
  }
});
