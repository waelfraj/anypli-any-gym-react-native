import { StyleSheet } from 'react-native';
import colors from '../../../../utils/constants/colors';
import { fonts } from '../../../../utils/constants/font';
import { fontSize } from '../../../../utils/constants/fontSize';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';

export default StyleSheet.create({
  detailsContainer: {
    margin: MARGING_SPACING,
    backgroundColor: colors.snowWhite,
    padding: MARGING_SPACING,
    borderRadius: MARGING_SPACING
  },
  container: {
    backgroundColor: colors['gray-100'],
    borderRadius: MARGING_SPACING,
    padding: MARGING_SPACING
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.POPINS_BOLD,
    marginBottom: 4,
    marginTop: 10
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.POPINS_REGULAR
  },
  description: {
    marginTop: 10
  },
  image: {
    height: 150,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.primary,
    fontSize: fontSize.MEDIUM
  },
  button: {
    width: '100%',
    borderColor: colors.primary,
    borderWidth: 1
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowContainer: {
    justifyContent: 'space-between',
    width: '100%'
  },
  datatRowColor: {
    color: colors.primary
  }
});
