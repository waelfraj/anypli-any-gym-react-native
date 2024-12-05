import { StyleSheet } from 'react-native';
import colors from '../../../../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    marginVertical: 20
  },
  text: {
    color: colors.primary,
    fontSize: 32
  }
});
