import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';
import { MARGING_SPACING } from '../../utils/constants/spacing';

export default StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors['teal-400'],
    backgroundColor: colors.lightOrange,
    width: '100%',
    paddingHorizontal: MARGING_SPACING
  }
});
