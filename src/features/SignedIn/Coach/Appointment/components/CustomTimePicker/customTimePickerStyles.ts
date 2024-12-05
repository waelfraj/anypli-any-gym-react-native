import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 10
  },
  timePicker: {
    width: '100%',
    alignItems: 'center'
  },
  timeInputs: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeInputWrapper: {
    width: 40,
    alignItems: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: 1
  },
  timeInput: {
    textAlign: 'center',
    fontSize: 18
  },
  timeSeparator: {
    fontSize: 18,
    marginHorizontal: 5
  }
});
