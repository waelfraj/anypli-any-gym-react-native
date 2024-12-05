import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../utils/constants/spacing';
import colors from '../../../utils/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  accordionContainer: {
    margin: MARGING_SPACING
  },
  titleContainer: {
    backgroundColor: colors['gray-100'],
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  contentContainer: {
    backgroundColor: colors.lightOrange,
    padding: 10,
    borderRadius: 5,
    marginBottom: 5
  },
  content: {
    fontSize: 14
  },
  sectionImage: {
    marginTop: 20,
    width: '100%',
    height: 200,
    borderRadius: 6
  }
});
