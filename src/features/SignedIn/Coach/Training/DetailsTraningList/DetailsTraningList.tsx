import React from 'react';
import { GestureResponderEvent, ScrollView, Text, View } from 'react-native';
import { Exercise } from '../../../../../models/Exercise';
import ExercisesList from '../components/ExercisesList/ExercisesList';
import CustomButton from '../../../../../components/Button/CustomButton';
import styles from './detailsTraningListStyles';
import { ListExercise } from '../../../../../models/TrainingList';
import LoadingImage from '../components/LoadingImage/LoadingImage';
import { strings } from '../../../../../locales/i18n';
import DataRow from '../components/DataRow/DataRow';

interface DetailsTraningListProps {
  dataRow: (
    | {
        text: number | undefined;
        icon: string;
      }
    | {
        text: string | undefined;
        icon: string;
      }
    | {
        text: boolean | undefined;
        icon: string;
      }
  )[];

  exercises: Exercise[];
  training?: ListExercise;
  goToAddExercise: (event: GestureResponderEvent) => void;
}

const DetailsTraningList: React.FC<DetailsTraningListProps> = ({
  exercises,
  training,
  goToAddExercise,
  dataRow
}): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        {training && (
          <View style={styles.container}>
            <View style={styles.image}>
              <LoadingImage item={training?.image} />
            </View>
            <Text style={styles.title}>{training?.title}</Text>
            <View style={[styles.row, styles.rowContainer]}>
              <DataRow data={dataRow} style={styles.datatRowColor} />
            </View>
            <Text style={[styles.description, styles.text]}>
              {training?.description}
            </Text>
          </View>
        )}
        <View>
          <ExercisesList
            exercises={exercises}
            idList={training && training?.id ? training?.id : ''}
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              title={strings('training.addExercise')}
              textStyle={styles.buttonText}
              ButtonProps={styles.button}
              handlePress={goToAddExercise}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsTraningList;
