import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { fonts } from '../../../../../../utils/constants/font';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';
const styles = StyleSheet.create({
  row: {
    paddingVertical: 25,
    paddingHorizontal: MARGING_SPACING,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: MARGING_SPACING,
    backgroundColor: colors.lightOrange,
    borderRadius: 10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: MARGING_SPACING
  },
  text: {
    fontSize: fontSize.MEDIUM,
    fontFamily: fonts.POPINS_SEMI_BOLD
  },
  title: {
    fontSize: fontSize.LARGE,
    fontFamily: fonts.POPINS_BOLD,
    color: colors.darkOrange,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  icon: {
    fontSize: 32,
    color: colors.orangeBurnt
  }
});

export default styles;
