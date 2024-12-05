import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
import colors from '../../../../../../utils/constants/colors';

export default StyleSheet.create({
  title: {
    fontSize: 16,
    marginVertical: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors['gray-50'],
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10
  },
  card: {
    height: 50,
    width: 50,
    marginRight: MARGING_SPACING
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 16
  },
  deleteBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  icon: {
    fontSize: 26,
    color: colors['red-500']
  }
});
