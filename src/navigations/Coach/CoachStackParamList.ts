import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Exercise } from '../../models/Exercise';

export type CoachStackParamList = {
  WelcomeCoach: undefined;
  ProfilCoach: undefined;
  TrainingCoach: undefined;
  WelcomeCoachStack: undefined;
  ProfilCoachStack: undefined;
  TrainingCoachStack: undefined;
  TrainingListStack: undefined;
  DetailsTrainingListStack: { id: string };
  ExerciseDetailsStack: { exercise: Exercise };
  AddExerciseStack: { trainingList: string };
  ListExerciseStack: { category?: string };
  AddTrainingListStack: undefined;
  ChangeLanguage: undefined;
  EditCoach: undefined;
  AboutStack: undefined;
  chatBot: undefined;
  appointment: undefined;
  appointmentStack: undefined;
};

export type CoachStackScreenProps<Screen extends keyof CoachStackParamList> =
  NativeStackScreenProps<CoachStackParamList, Screen>;
