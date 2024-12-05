import { StyleSheet } from 'react-native';
import { MARGING_SPACING } from '../../../../../utils/constants/spacing';
import colors from '../../../../../utils/constants/colors';
import { fontSize } from '../../../../../utils/constants/fontSize';

const styles = StyleSheet.create({
  container: {
    margin: MARGING_SPACING
  },
  scrollContainer: {
    flexGrow: 1
  },
  buttonContainer: {
    marginTop: MARGING_SPACING,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addStaffButtonStyle: {
    width: '49%',
    backgroundColor: colors['indigo-200'],
    paddingVertical: MARGING_SPACING,
    borderWidth: 2,
    borderColor: colors['indigo-700']
  },
  addStaffButtonText: {
    marginHorizontal: 2,
    color: colors['indigo-700'],
    fontSize: fontSize.SMALL
  },
  addAdvertisementButtonStyle: {
    width: '49%',
    backgroundColor: colors['indigo-700'],
    paddingVertical: MARGING_SPACING,
    borderWidth: 2,
    borderColor: colors['indigo-200']
  },
  addAdvertisementButtonText: {
    marginHorizontal: 2,
    color: colors['indigo-100'],
    fontSize: fontSize.SMALL
  }
});

export default styles;
