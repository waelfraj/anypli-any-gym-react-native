import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Exercise } from '../../models/Exercise';

export type MemberStackParamList = {
  WelcomeMember: undefined;
  ProfilMember: undefined;
  TrainingMember: undefined;
  WelcomeMemberStack: undefined;
  ProfilMemberStack: undefined;
  TrainingMemberStack: undefined;
  TrainingListStack: undefined;
  DetailsTrainingListStack: { id: string };
  ExerciseDetailsStack: { exercise: Exercise };
  ListExerciseStack: { category?: string };
  ChangeLanguage: undefined;
  EditMember: undefined;
  AboutStack: undefined;
  Weight: undefined;
  Progress: undefined;
  completeProfil: undefined;
  trainingHistory: undefined;
  chatBot: undefined;
  appointment: undefined;
  appointmentStack: undefined;
};

export type MemberStackScreenProps<Screen extends keyof MemberStackParamList> =
  NativeStackScreenProps<MemberStackParamList, Screen>;
