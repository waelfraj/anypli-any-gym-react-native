import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import { fonts } from '../../utils/constants/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: MARGING_SPACING,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: MARGING_SPACING
    },
    shadowOpacity: 0.3,
    shadowRadius: MARGING_SPACING
  },
  text: {
    fontFamily: fonts.POPINS_BOLD,
    textAlign: 'center'
  },
  iconSize: {
    fontSize: 24
  }
});
