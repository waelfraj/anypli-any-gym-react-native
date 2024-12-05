import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { fonts } from '../../../../../../utils/constants/font';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH / 1.2,
    marginVertical: 20,
    backgroundColor: colors.snowWhite,
    borderRadius: 20,
    padding: 20,
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
    elevation: 2,
    backgroundColor: colors['teal-500']
  },
  buttonCancel: {
    backgroundColor: colors['red-500']
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
    marginHorizontal: MARGING_SPACING,
    marginVertical: MARGING_SPACING
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
  },
  input: {
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '90%'
  },
  timeContainer: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
