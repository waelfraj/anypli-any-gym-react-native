import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../../../../../utils/constants/colors';
import styles from './appointmentCardStyles';

interface AppointmentCardProps {
  item: {
    id: string;
    name: string;
    date: string;
    type: string;
  };
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ item }) => {
  let bgColor;
  let bgTraitColor;
  switch (item.type) {
    case 'upcoming':
      bgColor = { backgroundColor: colors['blue-200'] };
      bgTraitColor = { backgroundColor: colors['blue-500'] };
      break;
    case 'passing':
      bgColor = { backgroundColor: colors['red-200'] };
      bgTraitColor = { backgroundColor: colors['red-500'] };
      break;
    default:
      bgColor = { backgroundColor: colors['green-200'] };
      bgTraitColor = { backgroundColor: colors['green-500'] };
      break;
  }

  return (
    <View style={[styles.container, bgColor]}>
      <View style={[styles.trait, bgTraitColor]} />
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.desc}>9.00am - 10.00am</Text>
        <Text style={styles.desc}>Cardio</Text>
        <Text style={styles.count}>1/5</Text>
      </View>
    </View>
  );
};

export default AppointmentCard;
