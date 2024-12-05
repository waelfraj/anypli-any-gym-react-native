import React, { Dispatch, SetStateAction } from 'react';
import ExerciseDetails from './ExerciseDetails';
import { Exercise } from '../../../../../models/Exercise';
import { strings } from '../../../../../locales/i18n';

/**
 * Container used to separate ExerciseDetails logic as a wrapper to ExerciseDetails screen
 * @returns JSX.Element
 */
interface ExerciseDetailsContainerProps {
  exercise: Exercise;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const ExerciseDetailsContainer: React.FC<ExerciseDetailsContainerProps> = ({
  exercise,
  isVisible,
  setIsVisible
}): JSX.Element => {
  const closeModal = () => {
    setIsVisible(false);
  };

  const dataRow = [
    {
      text: strings('level.' + exercise?.difficulty),
      icon: 'cellular-outline'
    },
    { text: exercise.calories, icon: 'calculator-outline' },
    {
      text: strings('exercise.' + exercise?.category),
      icon: 'reader-outline'
    },

    { text: exercise.sets, icon: 'footsteps-outline' },
    { text: exercise.createdAt, icon: 'calendar-number-outline' }
  ];

  return (
    <ExerciseDetails
      exercise={exercise}
      isVisible={isVisible}
      closeModal={closeModal}
      dataRow={dataRow}
    />
  );
};

export default ExerciseDetailsContainer;
