import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import { fontSize } from '../../../../../../utils/constants/fontSize';
import colors from '../../../../../../utils/constants/colors';
import { strings } from '../../../../../../locales/i18n';

interface TitleProps {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const Title: React.FC<TitleProps> = ({ title, onPress }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
      }}>
      <Text
        style={{
          fontSize: fontSize.MEDIUM,
          fontWeight: '500'
        }}>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: colors['gray-400'],
            fontSize: fontSize.MEDIUM
          }}>
          {strings('labels.viewMore')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;
