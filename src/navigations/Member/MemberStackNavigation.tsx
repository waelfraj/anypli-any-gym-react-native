import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangeLanguage from '../../components/ChangeLanguage/ChangeLanguage';
import AboutContainer from '../../features/SignedIn/About/About.container';
import AppointmentContainer from '../../features/SignedIn/Member/Appointment/Appointment.container';
import CompleteProfilContainer from '../../features/SignedIn/Member/CompleteProfil/CompleteProfil.container';
import DetailsTraningListContainer from '../../features/SignedIn/Member/DetailsTraningList/DetailsTraningList.container';
import ProfilMemberContainer from '../../features/SignedIn/Member/ProfilMember/ProfilMember.container';
import ProgressContainer from '../../features/SignedIn/Member/Progress/Progress.container';
import TrainingContainer from '../../features/SignedIn/Member/Training/Training.container';
import TrainingHistoryContainer from '../../features/SignedIn/Member/TrainingHistory/TrainingHistory.container';
import TrainingListContainer from '../../features/SignedIn/Member/TrainingList/TrainingList.container';
import WeightContainer from '../../features/SignedIn/Member/Weight/Weight.container';
import WelcomeMemberContainer from '../../features/SignedIn/Member/WelcomeMember/WelcomeMember.container';
import EditProfilContainer from '../../features/SignedIn/Staff/EditProfil/screen/EditProfil.container';
import { strings } from '../../locales/i18n';
import {
  ABOUT_SCREEN_NAME,
  APPOINTMENT_STACK_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  COMPLETE_PROFIL_SCREEN_NAME,
  DETAILS_TRANING_LIST_SCREEN_NAME,
  EDIT_PROFIL_MEMBER_SCREEN_NAME,
  PROFILE_MEMBER_STACK_SCREEN_NAME,
  PROGRESS_SCREEN_NAME,
  TRAINING_HISTORY_SCREEN_NAME,
  TRAINING_LIST_EXERCISE_SCREEN_NAME,
  TRAINING_MEMBER_STACK_SCREEN_NAME,
  WEIGHT_SCREEN_NAME,
  WELCOME_MEMBER_STACK_SCREEN_NAME
} from '../../utils/constants/screenName';
import { MemberStackParamList } from './MemberStackParamList';

const MemberStackNavigation = (): JSX.Element => {
  const MemberStack = createNativeStackNavigator<MemberStackParamList>();

  return (
    <MemberStack.Navigator>
      <MemberStack.Screen
        name={WELCOME_MEMBER_STACK_SCREEN_NAME}
        component={WelcomeMemberContainer}
        options={{ headerShown: false }}
      />
    </MemberStack.Navigator>
  );
};

const TrainingStackNavigation = (): JSX.Element => {
  const MemberStack = createNativeStackNavigator<MemberStackParamList>();

  return (
    <MemberStack.Navigator>
      <MemberStack.Screen
        name={TRAINING_MEMBER_STACK_SCREEN_NAME}
        component={TrainingContainer}
        options={{ headerShown: false }}
      />
      <MemberStack.Screen
        name={TRAINING_LIST_EXERCISE_SCREEN_NAME}
        component={TrainingListContainer}
        options={{ title: strings('training.trainingList') }}
      />
      <MemberStack.Screen
        name={TRAINING_HISTORY_SCREEN_NAME}
        component={TrainingHistoryContainer}
        options={{ title: strings('labels.trainingHistory') }}
      />
      <MemberStack.Screen
        name={DETAILS_TRANING_LIST_SCREEN_NAME}
        component={DetailsTraningListContainer}
        options={{ title: strings('training.listDetails') }}
      />
    </MemberStack.Navigator>
  );
};

const AppointmentStackNavigation = (): JSX.Element => {
  const MemberStack = createNativeStackNavigator<MemberStackParamList>();

  return (
    <MemberStack.Navigator>
      <MemberStack.Screen
        name={APPOINTMENT_STACK_SCREEN_NAME}
        component={AppointmentContainer}
        options={{ headerShown: false }}
      />
    </MemberStack.Navigator>
  );
};

const ProfilStackNavigation = (): JSX.Element => {
  const ProfileStack = createNativeStackNavigator<MemberStackParamList>();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_MEMBER_STACK_SCREEN_NAME}
        component={ProfilMemberContainer}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={WEIGHT_SCREEN_NAME}
        component={WeightContainer}
        options={{ title: strings('labels.trakerWeight') }}
      />
      <ProfileStack.Screen
        name={CHANGE_LANGUAGE_SCREEN_NAME}
        component={ChangeLanguage}
        options={{ title: strings('labels.changeLanguage') }}
      />
      <ProfileStack.Screen
        name={EDIT_PROFIL_MEMBER_SCREEN_NAME}
        component={EditProfilContainer}
        options={{ title: strings('labels.edit') }}
      />
      <ProfileStack.Screen
        name={ABOUT_SCREEN_NAME}
        component={AboutContainer}
        options={{ title: strings('labels.aPropos') }}
      />
      <ProfileStack.Screen
        name={PROGRESS_SCREEN_NAME}
        component={ProgressContainer}
        options={{ title: strings('labels.progress') }}
      />
      <ProfileStack.Screen
        name={COMPLETE_PROFIL_SCREEN_NAME}
        component={CompleteProfilContainer}
        options={{ title: strings('labels.completeProfil') }}
      />
    </ProfileStack.Navigator>
  );
};

export {
  AppointmentStackNavigation,
  MemberStackNavigation,
  ProfilStackNavigation,
  TrainingStackNavigation
};
