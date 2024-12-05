import { StyleSheet } from 'react-native';
import { fontSize } from '../../utils/constants/fontSize';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants/layout';
import { fonts } from './../../utils/constants/font';
import colors from './../../utils/constants/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH / 1.5,
    margin: 20,
    backgroundColor: colors.snowWhite,
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    borderRadius: 8,
    padding: MARGING_SPACING,
    margin: 10,
    elevation: 2
  },
  buttonCancel: {
    backgroundColor: colors['gray-600']
  },
  errorButton: {
    backgroundColor: colors.errorRed
  },
  warningButton: {
    backgroundColor: colors.warningYellow
  },
  infoButton: {
    backgroundColor: colors.infoBlue
  },
  successButton: {
    backgroundColor: colors.successGreen
  },
  textStyle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSize.SMALL,
    fontFamily: fonts.POPINS_REGULAR
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: fontSize.LARGE,
    fontFamily: fonts.POPINS_REGULAR,
    marginHorizontal: MARGING_SPACING
  },
  errorTitle: {
    color: colors.errorRed
  },
  successTitle: {
    color: colors.successGreen
  },
  infoTitle: {
    color: colors.infoBlue
  },
  warningTitle: {
    color: colors.warningYellow
  },
  message: {
    textAlign: 'center',
    marginVertical: MARGING_SPACING,
    fontFamily: fonts.POPINS_REGULAR
  },
  image: {
    marginVertical: MARGING_SPACING,
    height: WINDOW_HEIGHT / 7,
    width: WINDOW_WIDTH
  }
});
