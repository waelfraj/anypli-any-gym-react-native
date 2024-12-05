import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import { fontSize } from '../../../../../utils/constants/fontSize';
import colors from '../../../../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    margin: MARGING_SPACING
  },
  errorText: {
    fontSize: fontSize.MEDIUM,
    color: colors.errorRed
  },
  button: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.LARGE
  },
  imageContainer: {
    backgroundColor: colors.lightOrange,
    borderRadius: 10,
    marginVertical: MARGING_SPACING,
    paddingVertical: MARGING_SPACING
  },
  image: {
    height: 150,
    width: '100%'
  }
});
