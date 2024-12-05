import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './completeProfilItemsStyles';
interface CompleteProfilItemsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  data: { key: string; name: string }[];
}

const CompleteProfilItems: React.FC<CompleteProfilItemsProps> = ({
  selected,
  setSelected,
  data
}) => {
  const handleChange = (key: string) => {
    setSelected(key);
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.key}
          onPress={() => {
            handleChange(item.key);
          }}
          style={styles.card}>
          <Text style={styles.text}>{item.name}</Text>
          <View
            style={[
              styles.radio,
              selected == item.key ? styles.actif : styles.inactive
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CompleteProfilItems;
