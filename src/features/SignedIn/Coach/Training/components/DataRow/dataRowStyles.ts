import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { fontSize } from '../../../../../../utils/constants/fontSize';

export default StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  text: {
    marginHorizontal: 2,
    color: colors.white,
    fontSize: fontSize.SMALL
  },
  icon: {
    fontSize: 18,
    color: colors.white
  }
});
