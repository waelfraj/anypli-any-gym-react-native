import { StyleSheet } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import { WINDOW_HEIGHT } from '../../../../../../utils/constants/layout';
import { MARGING_SPACING } from '../../../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: colors['gray-100'],
    width: '80%',
    height: WINDOW_HEIGHT / 2,
    borderRadius: MARGING_SPACING,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  cancelButtonText: {
    color: colors.primary
  },
  cancelButton: {
    marginBottom: MARGING_SPACING * 2,
    borderColor: colors.primary,
    borderWidth: 2
  },
  Button: {
    marginBottom: MARGING_SPACING * 2,
    backgroundColor: colors.primary
  },
  buttonText: {
    color: colors.white,
    borderColor: colors.primary,
    borderWidth: 2
  }
});
