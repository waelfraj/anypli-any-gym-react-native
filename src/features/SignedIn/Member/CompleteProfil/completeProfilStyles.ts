import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../utils/constants/layout';
import colors from '../../../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: MARGING_SPACING,
    alignItems: 'center'
  },
  componentContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  componentItem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors['teal-300'],
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  activeComponentItem: {
    backgroundColor: colors['teal-900']
  },
  componentItemText: {
    fontSize: 16,
    color: 'white'
  },
  card: {
    height: WINDOW_HEIGHT / 2,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    width: 120,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WINDOW_WIDTH - MARGING_SPACING * 6
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  buttonTextStyle: { color: colors['teal-900'] }
});
