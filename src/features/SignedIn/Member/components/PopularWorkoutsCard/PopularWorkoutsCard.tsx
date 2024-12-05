import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { strings } from '../../../../../locales/i18n';
import { TrainingList } from '../../../../../models/TrainingList';
import LoadingImage from '../../../Coach/Training/components/LoadingImage/LoadingImage';
import styles from './popularWorkoutsCardStyles';
interface PopularWorkoutsCardProps {
  handleOnPress?: (event: GestureResponderEvent) => void;
  item?: TrainingList;
}

const PopularWorkoutsCard: React.FC<PopularWorkoutsCardProps> = ({
  handleOnPress,
  item
}) => {
  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <LoadingImage item={item?.image} />
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>{item?.title}</Text>
            {item?.total_calories && (
              <Text style={styles.description}>
                {item.total_calories} {strings('labels.kcal')}
              </Text>
            )}
            {item?.exercises && (
              <Text style={styles.description}>
                {item.exercises.length} {strings('labels.exercise')}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularWorkoutsCard;
