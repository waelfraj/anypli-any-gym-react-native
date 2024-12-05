import { StyleSheet } from 'react-native';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import { fonts } from '../../../../../../utils/constants/font';
import {
  WINDOW_HEIGHT,
  WINDOW_WIDTH
} from '../../../../../../utils/constants/layout';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 40,
    justifyContent: 'space-evenly',
    height: WINDOW_HEIGHT / 3
  },
  text: {
    textAlign: 'center',
    fontSize: fontSize.LARGE,
    fontWeight: '600',
    fontFamily: fonts.POPINS_REGULAR
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: WINDOW_WIDTH / 2,
    height: WINDOW_HEIGHT / 2
  }
});
