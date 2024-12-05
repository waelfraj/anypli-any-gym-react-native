import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/constants/colors';
import { FORRWARD_ICON } from '../../utils/constants/icons';
import styles from './customListItemsStyles';

export interface CustomListItemsProps {
  listItems: {
    id?: string;
    name: string;
    icon?: string;
    verified?: boolean;
    onPress: (event: GestureResponderEvent) => void;
    customColor?: string;
  }[];
}

const CustomListItems: React.FC<CustomListItemsProps> = ({ listItems }) => {
  return (
    <>
      {listItems.map((listItem, index) => {
        let color = colors.primary;
        if (listItem.customColor) {
          color = listItem.customColor;
        } else if (listItem?.verified) {
          color = colors['green-500'];
        } else {
          color = colors['red-500'];
        }

        return (
          <TouchableOpacity
            style={styles.item}
            key={index}
            onPress={listItem.onPress}>
            <View style={styles.itemContainer}>
              {listItem.icon && (
                <Icon
                  name={listItem.icon}
                  style={styles.iconSize}
                  color={color}
                />
              )}
              <Text style={styles.text}>{listItem.name}</Text>
            </View>
            <Icon name={FORRWARD_ICON} style={styles.iconSize} color={color} />
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default CustomListItems;
