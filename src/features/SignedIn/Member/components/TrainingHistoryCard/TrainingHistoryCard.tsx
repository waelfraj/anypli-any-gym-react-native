import React from 'react';
import {
  GestureResponderEvent,
  Image,
  SafeAreaView,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../../../../config/images';
import { strings } from '../../../../../locales/i18n';
import {
  CALORIES_ICON,
  EXERCISES_ICON,
  MAN_ICON
} from '../../../../../utils/constants/icons';
import styles from './trainingHistoryCardStyles';
interface TrainingHistoryCardProps {
  handleOnPress?: ((event: GestureResponderEvent) => void) | undefined;
  dataRow?: {
    text: string | number | boolean | undefined;
    icon: string;
  }[];
  item?: any[];
}

const TrainingHistoryCard: React.FC<TrainingHistoryCardProps> = ({ item }) => {
  return (
    <View style={[styles.historyCard]}>
      <View style={styles.levelRow}>
        <Text style={styles.levelText}>
          {strings(`level.${item?.difficulty}`)}
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Image source={images.legs} style={styles.image} />
        <SafeAreaView>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.row}>
            <View style={[styles.row, styles.center]}>
              <Icon name={MAN_ICON} style={styles.trainingHistoryIcon} />
              <Text style={styles.rowText}>{item?.coach.user.name}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.row, styles.center]}>
              <Icon name={EXERCISES_ICON} style={styles.trainingHistoryIcon} />
              <Text style={styles.rowText}>{item?.exercises.length}</Text>
            </View>

            <View style={[styles.row, styles.center]}>
              <Icon name={CALORIES_ICON} style={styles.trainingHistoryIcon} />
              <Text style={styles.rowText}>{item?.total_calories}</Text>
            </View>
          </View>
          <View style={styles.row}></View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default TrainingHistoryCard;
