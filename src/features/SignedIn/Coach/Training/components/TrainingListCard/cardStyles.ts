import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import { fonts } from '../../../../../../utils/constants/font';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  },
  overlay: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  rowContainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 5
  },
  title: {
    paddingTop: 20,
    paddingBottom: 10,
    color: colors.white,
    fontSize: fontSize.LARGE,
    fontFamily: fonts.POPINS_BOLD
  },
  description: {
    marginHorizontal: 8,
    color: colors['gray-300'],
    fontSize: fontSize.MEDIUM,
    textAlign: 'center'
  }
});

export default styles;
