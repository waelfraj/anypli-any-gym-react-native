import { StyleSheet } from 'react-native';
import colors from '../../../../utils/constants/colors';
import { MARGING_SPACING } from '../../../../utils/constants/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: MARGING_SPACING,
    justifyContent: 'center',
    backgroundColor: colors['gray-100']
  },
  userContainer: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '90%'
  },
  chatContainer: {
    margin: 10,
    backgroundColor: colors['teal-700'],
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    maxWidth: '90%',
    alignSelf: 'flex-end'
  },
  userText: {
    textAlign: 'left',
    fontSize: 16
  },
  chatText: {
    textAlign: 'right',
    fontSize: 16,
    color: 'white'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loading: {
    width: '100%',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderColor: colors['gray-300'],
    borderRadius: 10,
    paddingHorizontal: 16,
    marginRight: 8
  },
  sendButton: {
    backgroundColor: colors['teal-700'],
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    borderColor: colors.errorRed
  }
});
