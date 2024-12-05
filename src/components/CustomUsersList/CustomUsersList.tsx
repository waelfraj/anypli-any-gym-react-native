import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/constants/colors';
import { DELETE_ICON, FORRWARD_ICON } from '../../utils/constants/icons';
import { ICON_SIZE } from './constants';
import styles from './customUsersListStyles';

export interface CustomUserListItem {
  id?: string;
  name: string;
  icon?: string;
  verified?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  onDelete: (event: GestureResponderEvent) => void;
  customColor?: string;
}

interface CustomUsersListProps {
  item: CustomUserListItem;
}

const CustomUsersList: React.FC<CustomUsersListProps> = ({ item }) => {
  let color = colors.primary;
  if (item.customColor) {
    color = item.customColor;
  } else if (item?.verified) {
    color = colors['green-500'];
  } else {
    color = colors['red-500'];
  }

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={item.onDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Icon name={DELETE_ICON} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableOpacity style={styles.item} onPress={item.onPress}>
        <View style={styles.itemContainer}>
          {item.icon && (
            <Icon name={item.icon} size={ICON_SIZE} color={color} />
          )}
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <Icon name={FORRWARD_ICON} size={ICON_SIZE} color={color} />
      </TouchableOpacity>
    </Swipeable>
  );
};

export default CustomUsersList;
