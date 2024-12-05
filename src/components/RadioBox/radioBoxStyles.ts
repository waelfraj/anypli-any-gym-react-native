import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import { fontSize } from '../../utils/constants/fontSize';
import { fonts } from '../../utils/constants/font';

const styles = StyleSheet.create({
  container: {
    marginBottom: MARGING_SPACING,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  radioText: {
    marginRight: MARGING_SPACING,
    fontSize: fontSize.MEDIUM,
    fontFamily: fonts.POPINS_BOLD
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: MARGING_SPACING
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: colors.orangeDeep
  }
});

export default styles;
