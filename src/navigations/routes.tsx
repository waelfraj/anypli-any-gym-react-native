import React from 'react';
import AuthStackNavigator from './AuthStackNavigation';
import { useAppSelector } from '../hooks/hooks';
import StaffBottomNavigation from './StaffBottomNavigation';
import CoachBottomNavigation from './Coach/CoachBottomNavigation';
import MemberBottomNavigation from './Member/MemberBottomNavigation';
import { roles } from '../enums/roles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import { MAIL_VALIDATION_SCREEN_NAME } from '../utils/constants/screenName';
import MailValidationContainer from '../features/OnBoarding/MailValidation/screens/MailValidation.container';
const Routes = () => {
  const isConnected = useAppSelector((state) => state.auth.isConnected);
  const user = useAppSelector((state) => state.auth.user);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  if (isConnected) {
    if (!user.email_valid) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name={MAIL_VALIDATION_SCREEN_NAME}
              component={MailValidationContainer}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else if (
      user.role == roles.ADMIN_ROLE_ID ||
      user.role == roles.STAFF_ROLE_ID
    ) {
      return <StaffBottomNavigation />;
    } else if (user.role == roles.COACH_ROLE_ID) {
      return <CoachBottomNavigation />;
    } else if (user.role == roles.MEMBER_ROLE_ID) {
      return <MemberBottomNavigation />;
    }
  }
  return <AuthStackNavigator />;
};

export default Routes;
