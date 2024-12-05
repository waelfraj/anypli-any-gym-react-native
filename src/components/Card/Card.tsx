import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import styles from './cardStyles';
import Icon from 'react-native-vector-icons/Ionicons';

interface CardItemsType {
  title: string;
  description: string;
  bgColor: string;
  iconName: string;
  iconColor: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

interface CardProps {
  cardItems: CardItemsType[];
}

const Card: React.FC<CardProps> = ({ cardItems }) => {
  return (
    <View style={styles.container}>
      {cardItems.map((item, index) => (
        <TouchableOpacity
          key={item.title}
          style={[styles.viewStyles, { backgroundColor: item.bgColor }]}
          onPress={item.onPress}>
          <Icon
            style={styles.iconContainer}
            name={item.iconName}
            color={item.iconColor}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.titleStyle]}>{item.title}</Text>
            <Text style={[styles.descriptionStyle]}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Card;
