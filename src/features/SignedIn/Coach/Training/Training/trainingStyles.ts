import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import colors from '../../../../../utils/constants/colors';
import { fonts } from '../../../../../utils/constants/font';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1
  },

  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: MARGING_SPACING,
    marginVertical: MARGING_SPACING
  },
  headerTitle: {
    fontSize: 32,
    color: colors['gray-800'],
    fontWeight: '700',
    fontFamily: fonts.POPINS_SEMI_BOLD
  },
  headerSubTitle: {
    fontSize: 32,
    color: colors['teal-800'],
    fontWeight: '700',
    fontFamily: fonts.POPINS_BOLD
  },
  imageContainer: {
    height: 150,
    marginTop: 10
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: MARGING_SPACING
  },
  itemContainer: {
    width: '49%',
    marginBottom: 10
  },
  itemContainerSecond: {
    width: '49%',
    marginBottom: 10,
    marginLeft: '2%'
  },
  icon: {
    fontSize: 32,
    color: colors['orange-700']
  },
  spacing: {
    margin: MARGING_SPACING
  },
  categoryTitle: {
    fontSize: 18,
    color: colors['gray-700'],
    fontWeight: '700',
    fontFamily: fonts.POPINS_SEMI_BOLD
  }
});
