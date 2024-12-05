import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import LoadingImage from '../LoadingImage/LoadingImage';
import styles from './cardStyles';
import { ListExercise } from '../../../../../../models/TrainingList';
import DataRow from '../DataRow/DataRow';

interface CardProps {
  handleOnPress: ((event: GestureResponderEvent) => void) | undefined;
  dataRow: {
    text: string | number | boolean | undefined;
    icon: string;
  }[];
  item: ListExercise;
}

const Card: React.FC<CardProps> = ({ handleOnPress, dataRow, item }) => {
  return (
    <TouchableOpacity onPress={handleOnPress} key={item.id}>
      <View style={styles.container}>
        <LoadingImage item={item.image} />
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>
              {item.description.length > 150
                ? item.description.slice(0, 150) + ' ...'
                : item.description}
            </Text>
          </View>
          <View style={[styles.row, styles.rowContainer]}>
            <DataRow data={dataRow} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
