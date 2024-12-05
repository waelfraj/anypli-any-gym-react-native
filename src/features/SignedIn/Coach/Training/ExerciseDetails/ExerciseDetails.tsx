import React from 'react';
import {
  GestureResponderEvent,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Exercise } from '../../../../../models/Exercise';
import { CLOSE_ICON } from '../../../../../utils/constants/icons';
import DataRow from '../components/DataRow/DataRow';
import LoadingImage from '../components/LoadingImage/LoadingImage';
import styles from './exerciseDetailsStyles';
/**
 * Represents ExerciseDetails screen ui
 * @returns JSX.Element
 */
interface ExerciseDetailsProps {
  exercise: Exercise;
  isVisible: boolean;
  closeModal: ((event: GestureResponderEvent) => void) | undefined;
  dataRow: {
    text: string | number | boolean | undefined;
    icon: string;
  }[];
}

const ExerciseDetails: React.FC<ExerciseDetailsProps> = ({
  exercise,
  isVisible,
  closeModal,
  dataRow
}): JSX.Element => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.container}>
        <View>
          <View style={styles.contenu}>
            <View style={styles.imageContainer}>
              <View style={styles.image}>
                <LoadingImage item={exercise.image} />
              </View>
              <TouchableOpacity style={styles.icon} onPress={closeModal}>
                <Icon name={CLOSE_ICON} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text style={styles.title}>{exercise.title}</Text>
              <View style={styles.row}>
                <DataRow data={dataRow} style={styles.colorDataRow} />
              </View>
              <Text style={styles.description}>{exercise.description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ExerciseDetails;
