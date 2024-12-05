import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 70,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
});
