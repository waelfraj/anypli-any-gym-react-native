import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage';
import AboutContainer from '../../features/SignedIn/About/About.container';
import AppointmentContainer from '../../features/SignedIn/Coach/Appointment/Appointment.container';
import EditProfilContainer from '../../features/SignedIn/Coach/EditProfil/screen/EditProfil.container';
import ProfilCoachContainer from '../../features/SignedIn/Coach/ProfilCoach/screens/ProfilCoach.container';
import AddExerciseContainer from '../../features/SignedIn/Coach/Training/AddExercise/AddExercise.container';
import AddTrainingListContainer from '../../features/SignedIn/Coach/Training/AddTrainingList/AddTrainingList.container';
import DetailsTraningListContainer from '../../features/SignedIn/Coach/Training/DetailsTraningList/DetailsTraningList.container';
import ListExercisesContainer from '../../features/SignedIn/Coach/Training/ListExercises/ListExercises.container';
import TrainingContainer from '../../features/SignedIn/Coach/Training/Training/Training.container';
import TrainingListContainer from '../../features/SignedIn/Coach/Training/TrainingList/TrainingList.container';
import WelcomeCoachContainer from '../../features/SignedIn/Coach/WelcomeCoach/WelcomeCoach.container';
import { strings } from '../../locales/i18n';
import {
  ABOUT_SCREEN_NAME,
  ADD_EXERCISE_SCREEN_NAME,
  ADD_TRAINING_LIST_SCREEN_NAME,
  APPOINTMENT_STACK_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  DETAILS_TRANING_LIST_SCREEN_NAME,
  EDIT_COACH_SCREEN_NAME,
  LIST_EXERCISE_SCREEN_NAME,
  PROFILE_COACH_STACK_SCREEN_NAME,
  TRAINING_COACH_STACK_SCREEN_NAME,
  TRAINING_LIST_EXERCISE_SCREEN_NAME,
  WELCOME_COACH_STACK_SCREEN_NAME
} from '../../utils/constants/screenName';
import { CoachStackParamList } from './CoachStackParamList';

const CoachStackNavigation = (): JSX.Element => {
  const CoachStack = createNativeStackNavigator<CoachStackParamList>();

  return (
    <CoachStack.Navigator>
      <CoachStack.Screen
        name={WELCOME_COACH_STACK_SCREEN_NAME}
        component={WelcomeCoachContainer}
        options={{ headerShown: false }}
      />
    </CoachStack.Navigator>
  );
};

const TrainingStackNavigation = (): JSX.Element => {
  const CoachStack = createNativeStackNavigator<CoachStackParamList>();

  return (
    <CoachStack.Navigator>
      <CoachStack.Screen
        name={TRAINING_COACH_STACK_SCREEN_NAME}
        component={TrainingContainer}
        options={{ headerShown: false }}
      />
      <CoachStack.Screen
        name={TRAINING_LIST_EXERCISE_SCREEN_NAME}
        component={TrainingListContainer}
        options={{ title: strings('training.trainingList') }}
      />
      <CoachStack.Screen
        name={DETAILS_TRANING_LIST_SCREEN_NAME}
        component={DetailsTraningListContainer}
        options={{ title: strings('training.listDetails') }}
      />

      <CoachStack.Screen
        name={ADD_EXERCISE_SCREEN_NAME}
        component={AddExerciseContainer}
        options={{ title: strings('training.addExercise') }}
      />
      <CoachStack.Screen
        name={LIST_EXERCISE_SCREEN_NAME}
        component={ListExercisesContainer}
        options={{ title: strings('labels.listExercise') }}
      />
      <CoachStack.Screen
        name={ADD_TRAINING_LIST_SCREEN_NAME}
        component={AddTrainingListContainer}
        options={{ title: strings('training.addListExercises') }}
      />
    </CoachStack.Navigator>
  );
};

export const AppointmentStackNavigation = (): JSX.Element => {
  const CoachStack = createNativeStackNavigator<CoachStackParamList>();

  return (
    <CoachStack.Navigator>
      <CoachStack.Screen
        name={APPOINTMENT_STACK_SCREEN_NAME}
        component={AppointmentContainer}
        options={{ headerShown: false }}
      />
    </CoachStack.Navigator>
  );
};

const ProfilStackNavigation = (): JSX.Element => {
  const ProfileStack = createNativeStackNavigator<CoachStackParamList>();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_COACH_STACK_SCREEN_NAME}
        component={ProfilCoachContainer}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={CHANGE_LANGUAGE_SCREEN_NAME}
        component={ChangeLanguage}
        options={{ title: strings('labels.changeLanguage') }}
      />
      <ProfileStack.Screen
        name={EDIT_COACH_SCREEN_NAME}
        component={EditProfilContainer}
        options={{ title: strings('labels.edit') }}
      />
      <ProfileStack.Screen
        name={ABOUT_SCREEN_NAME}
        component={AboutContainer}
        options={{ title: strings('labels.aPropos') }}
      />
    </ProfileStack.Navigator>
  );
};

export { CoachStackNavigation, ProfilStackNavigation, TrainingStackNavigation };
