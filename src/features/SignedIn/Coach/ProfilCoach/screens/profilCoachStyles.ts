import { StyleSheet } from 'react-native';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../utils/constants/layout';
import colors from '../../../../../utils/constants/colors';
import { fontSize } from '../../../../../utils/constants/fontSize';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    alignItems: 'center'
  },
  header: {
    height: WINDOW_HEIGHT / 5,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    width: WINDOW_WIDTH,
    marginBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textHeader: {
    color: colors.snowWhite,
    fontSize: fontSize.LARGE,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  listItemContainer: {
    width: '90%'
  },
  icon: {
    fontSize: 90,
    color: colors.snowWhite
  }
});
