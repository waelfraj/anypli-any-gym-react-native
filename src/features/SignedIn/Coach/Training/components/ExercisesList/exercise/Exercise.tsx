import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { usePopupActions } from '../../../../../../../hooks/usePopupActions';
import { useRemoveExerciseFromListMutation } from '../../../../../../../store/api/trainingListsApi';
import { useAppDispatch } from '../../../../../../../hooks/hooks';
import { removeExerciseFromList } from '../../../../../../../store/slices/trainingListSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingImage from '../../LoadingImage/LoadingImage';
import styles from '../exercisesListStyles';
import colors from '../../../../../../../utils/constants/colors';
import ExerciseDetailsContainer from '../../../ExerciseDetails/ExerciseDetails.container';
import { DELETE_ICON } from '../../../../../../../utils/constants/icons';

interface ExercisesListProps {
  exercise: any;
  idList: string;
}

const Exercise: React.FC<ExercisesListProps> = ({ exercise, idList }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const goToExercise = () => {
    setModalVisible(true);
  };
  const {
    showDeleteConfirmationPopup,
    showDeletedSuccessfully,
    showInternalServerError
  } = usePopupActions();

  const [removeFromList] = useRemoveExerciseFromListMutation();
  const dispatch = useAppDispatch();
  const remove = async (idList: string, idExercise: string) => {
    const confirmCallback = async () => {
      if (idList && idExercise) {
        try {
          const response = await removeFromList({
            idList: idList,
            idExercise: idExercise
          });
          if ('data' in response) {
            dispatch(
              removeExerciseFromList({ listId: idList, idExercise: idExercise })
            );
            showDeletedSuccessfully();
          } else {
            showInternalServerError();
          }
        } catch (error) {
          showInternalServerError();
        }
      }
    };

    showDeleteConfirmationPopup(confirmCallback);
  };

  const rightSwipe = (idExercise: string) => {
    return (
      <TouchableOpacity
        onPress={() => remove(idList, idExercise)}
        activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Icon name={DELETE_ICON} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Swipeable
        renderRightActions={() => rightSwipe(exercise.id)}
        key={exercise.id}>
        <TouchableOpacity onPress={goToExercise}>
          <View style={styles.container}>
            <View style={styles.card}>
              <LoadingImage item={exercise.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{exercise.title}</Text>
              <Text style={styles.text}>{exercise.sets}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
      <ExerciseDetailsContainer
        exercise={exercise}
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
      />
    </View>
  );
};

export default Exercise;
