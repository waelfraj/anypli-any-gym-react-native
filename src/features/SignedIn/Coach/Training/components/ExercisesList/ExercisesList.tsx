import React from 'react';
import { View, Text } from 'react-native';
import styles from './exercisesListStyles';
import { Exercise } from '../../../../../../models/Exercise';
import ExerciseView from './exercise/Exercise';
import { strings } from '../../../../../../locales/i18n';

interface ExercisesListProps {
  exercises: Exercise[];
  idList: string;
}

const ExercisesList: React.FC<ExercisesListProps> = ({ exercises, idList }) => {
  return (
    <View>
      <Text style={styles.title}>{strings('labels.listExercise')}</Text>
      {exercises.map((element) => (
        <ExerciseView key={element.id} exercise={element} idList={''} />
      ))}
    </View>
  );
};

export default ExercisesList;
