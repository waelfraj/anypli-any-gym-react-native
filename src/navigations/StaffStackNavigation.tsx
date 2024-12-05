import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ABOUT_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  COACH_DETAILS_SCREEN_NAME,
  CREATE_ADVERTISEMENT_SCREEN_NAME,
  CREATE_STAFF_SCREEN_NAME,
  EDIT_PROFIL_STAFF_SCREEN_NAME,
  LIST_COACHES_SCREEN_NAME,
  LIST_MEMBERS_STAFF_SCREEN_NAME,
  LIST_STAFF_SCREEN_NAME,
  MEMBER_DETAILS_STAFF_SCREEN_NAME,
  PROFILE_STAFF_STACK_SCREEN_NAME,
  STAFF_DETAILS_SCREEN_NAME,
  WELCOME_STAFF_STACK_SCREEN_NAME
} from '../utils/constants/screenName';
import WelcomeStaffContainer from '../features/SignedIn/Staff/WelcomeStaff/screens/WelcomeStaff.container';
import CreateStaffContainer from '../features/SignedIn/Staff/CreateStaff/screen/CreateStaff.container';
import ProfilStaffContainer from '../features/SignedIn/Staff/ProfilStaff/screens/ProfilStaff.container';
import EditProfilContainer from '../features/SignedIn/Staff/EditProfil/screen/EditProfil.container';
import { strings } from '../locales/i18n';
import CreateAdvertisementContainer from '../features/SignedIn/Staff/CreateAdvertisement/screens/CreateAdvertisement.container';
import { RootStackParamList } from './RootStackParamList';
import ListMemberContainer from '../features/SignedIn/Staff/Member/ListMember/screen/ListMember.container';
import MemberDetailsContainer from '../features/SignedIn/Staff/Member/MemberDetails/screen/MemberDetails.container';
import StaffDetailsContainer from '../features/SignedIn/Staff/Staff/StaffDetails/screen/StaffDetails.container';
import ListStaffContainer from '../features/SignedIn/Staff/Staff/ListStaff/screen/ListStaff.container';
import ListCoachContainer from '../features/SignedIn/Staff/Coach/ListCoach/screen/ListCoach.container';
import CoachDetailsContainer from '../features/SignedIn/Staff/Coach/CoachDetails/screen/CoachDetails.container';
import ChangeLanguage from '../components/ChangeLanguage/ChangeLanguage';
import AboutContainer from '../features/SignedIn/About/About.container';

const StaffStackNavigation = (): JSX.Element => {
  const StaffStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <StaffStack.Navigator>
      <StaffStack.Screen
        name={WELCOME_STAFF_STACK_SCREEN_NAME}
        component={WelcomeStaffContainer}
        options={{ headerShown: false }}
      />
      <StaffStack.Screen
        name={LIST_MEMBERS_STAFF_SCREEN_NAME}
        component={ListMemberContainer}
        options={{ title: strings('staff.listMembers') }}
      />
      <StaffStack.Screen
        name={MEMBER_DETAILS_STAFF_SCREEN_NAME}
        component={MemberDetailsContainer}
        options={{ title: strings('staff.memberDetails') }}
      />
      <StaffStack.Screen
        name={CREATE_STAFF_SCREEN_NAME}
        component={CreateStaffContainer}
        options={{ title: strings('staff.createStaff') }}
      />
      <StaffStack.Screen
        name={CREATE_ADVERTISEMENT_SCREEN_NAME}
        component={CreateAdvertisementContainer}
        options={{ title: strings('staff.createAdvertisement') }}
      />
      <StaffStack.Screen
        name={LIST_STAFF_SCREEN_NAME}
        component={ListStaffContainer}
        options={{ title: strings('staff.listStaffs') }}
      />
      <StaffStack.Screen
        name={STAFF_DETAILS_SCREEN_NAME}
        component={StaffDetailsContainer}
        options={{ title: strings('staff.staffDetails') }}
      />

      <StaffStack.Screen
        name={LIST_COACHES_SCREEN_NAME}
        component={ListCoachContainer}
        options={{ title: strings('staff.listCoaches') }}
      />
      <StaffStack.Screen
        name={COACH_DETAILS_SCREEN_NAME}
        component={CoachDetailsContainer}
        options={{ title: strings('staff.coachDetails') }}
      />
    </StaffStack.Navigator>
  );
};

const ProfilStackNavigation = (): JSX.Element => {
  const ProfileStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_STAFF_STACK_SCREEN_NAME}
        component={ProfilStaffContainer}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name={CHANGE_LANGUAGE_SCREEN_NAME}
        component={ChangeLanguage}
        options={{ title: strings('labels.changeLanguage') }}
      />
      <ProfileStack.Screen
        name={EDIT_PROFIL_STAFF_SCREEN_NAME}
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

export { StaffStackNavigation, ProfilStackNavigation };
