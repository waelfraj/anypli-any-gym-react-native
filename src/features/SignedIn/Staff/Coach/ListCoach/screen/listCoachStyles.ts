import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
import colors from '../../../../../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    margin: MARGING_SPACING
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors['teal-400'],
    backgroundColor: colors['gray-100'],
    width: '100%',
    paddingHorizontal: MARGING_SPACING
  },
  text: {
    color: colors.snowWhite
  },
  button: {
    backgroundColor: colors.primary
  }
});
