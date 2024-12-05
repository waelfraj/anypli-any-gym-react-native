import React from 'react';
import { View, Text, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './dataRowStyles';

export interface DataRowProps {
  data: {
    text: string | number | boolean | undefined;
    icon: string;
  }[];
  style?: TextStyle;
}

const DataRow: React.FC<DataRowProps> = ({ data, style }) => {
  return (
    <>
      {data.map((element, index) => (
        <View style={styles.row} key={index}>
          <Icon name={element.icon} style={[styles.icon, style]} />
          <Text style={[styles.text, style]}>{element.text}</Text>
        </View>
      ))}
    </>
  );
};

export default DataRow;
