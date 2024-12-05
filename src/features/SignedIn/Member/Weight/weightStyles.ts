import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';
import colors from '../../../../utils/constants/colors';
import { fonts } from '../../../../utils/constants/font';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1
  },
  container: {
    margin: MARGING_SPACING,
    justifyContent: 'space-between',
    height: '100%'
  },
  chartStyle: {
    marginBottom: 8,
    borderRadius: 16
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fonts.POPINS_BOLD
  },
  row: {
    backgroundColor: colors['gray-100'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: MARGING_SPACING
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.POPINS_REGULAR
  },

  loadMorebuttonText: {
    color: colors.primary
  },

  Button: {
    marginBottom: MARGING_SPACING * 2,
    backgroundColor: colors.primary
  },
  buttonText: {
    color: colors.white,
    borderColor: colors.primary,
    borderWidth: 2
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

export default styles;
