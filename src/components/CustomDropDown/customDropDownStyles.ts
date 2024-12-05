import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';
import { MARGING_SPACING } from '../../utils/constants/spacing';

export default StyleSheet.create({
  dropDownStyle: {
    backgroundColor: colors.lightOrange,
    minHeight: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: MARGING_SPACING,
    width: '100%',
    marginVertical: 10
  },
  openDropDown: {
    backgroundColor: colors.lightOrange,
    padding: 10,
    marginVertical: 5
  },
  optionName: {
    margin: 5,
    padding: 10,
    borderRadius: 10
  },
  iconSize: { fontSize: 20 }
});
