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
  row: {
    flexDirection: 'row'
  },
  modalView: {
    height: WINDOW_HEIGHT / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH / 1.2,
    backgroundColor: colors.snowWhite,
    borderRadius: 20,
    padding: 20,
    shadowColor: colors['gray-900'],
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    marginVertical: MARGING_SPACING,
    color: colors['teal-900']
  },
  subTitle: {
    fontSize: fontSize.MEDIUM,
    fontFamily: fonts.POPINS_REGULAR,
    color: colors['gray-800']
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
    marginBottom: 20,
    width: '90%'
  },
  timeContainer: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  dateSeparator: {
    marginHorizontal: 7
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20 // Ajoutez un espace supplémentaire en bas du contenu
  }
});

export default styles;
