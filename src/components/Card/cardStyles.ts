import { StyleSheet } from 'react-native';
import colors from '../../utils/constants/colors';
import { fonts } from '../../utils/constants/font';
import { fontSize } from '../../utils/constants/fontSize';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewStyles: {
    padding: 12,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    shadowOpacity: 0.2,
    elevation: 5,
    height: 120
  },
  iconContainer: {
    fontSize: fontSize.XXLARGE
  },
  textContainer: {
    alignItems: 'center'
  },
  titleStyle: {
    color: colors.white,
    marginVertical: 4,
    fontFamily: fonts.POPINS_BOLD,
    fontWeight: '500',
    fontSize: fontSize.SMALL
  },
  descriptionStyle: {
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fonts.POPINS_BOLD,
    fontSize: fontSize.LARGE
  }
});

export default styles;
