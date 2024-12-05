import { StyleSheet } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/constants/layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH / 1.5,
    margin: 20,
    borderRadius: 20,
    padding: 35
  },
  image: { width: WINDOW_WIDTH / 2, height: WINDOW_HEIGHT / 4 }
});

export default styles;
