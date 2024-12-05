import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Exercise } from '../../../../models/Exercise';
import { TrainingList } from '../../../../models/TrainingList';
import LoadingImage from '../../Coach/Training/components/LoadingImage/LoadingImage';
import DataRow from '../../Coach/Training/components/DataRow/DataRow';
import ExercisesList from '../../Coach/Training/components/ExercisesList/ExercisesList';
import CustomButton from '../../../../components/Button/CustomButton';
import { strings } from '../../../../locales/i18n';
import styles from './detailsTraningListStyles';

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
  training?: TrainingList;
  onSubmit: () => void;
}

const DetailsTraningList: React.FC<DetailsTraningListProps> = ({
  exercises,
  training,
  dataRow,
  onSubmit
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
              title={strings('actions.done')}
              textStyle={styles.buttonText}
              ButtonProps={styles.button}
              handlePress={onSubmit}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsTraningList;
