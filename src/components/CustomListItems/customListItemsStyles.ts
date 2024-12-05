import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../utils/constants/spacing';
import colors from '../../utils/constants/colors';
import { fontSize } from '../../utils/constants/fontSize';
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row'
  },
  item: {
    marginVertical: MARGING_SPACING / 2,
    backgroundColor: colors.lightOrange,
    padding: MARGING_SPACING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: MARGING_SPACING / 2
  },
  text: {
    marginLeft: 10,
    fontSize: fontSize.MEDIUM,
    textTransform: 'capitalize'
  },
  iconSize: {
    fontSize: 20
  }
});

export default styles;
