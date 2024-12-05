import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBarIcons from '../../components/TabBarIcons/TabBarIcons';

import ChatBotContainer from '../../features/SignedIn/Coach/ChatBot/ChatBot.container';
import { strings } from '../../locales/i18n';
import colors from '../../utils/constants/colors';
import {
  APPOINTMENT_SCREEN_NAME,
  CHAT_BOT_SCREEN_NAME,
  PROFILE_COACH_SCREEN_NAME,
  TRAINING_COACH_SCREEN_NAME,
  WELCOME_COACH_SCREEN_NAME
} from '../../utils/constants/screenName';
import {
  AppointmentStackNavigation,
  CoachStackNavigation,
  ProfilStackNavigation,
  TrainingStackNavigation
} from './CoachStackNavigation';
import { CoachStackParamList } from './CoachStackParamList';
import { styles } from './coachNavigatorStyle';

const CoachBottomNavigation = () => {
  const Tab = createBottomTabNavigator<CoachStackParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors['gray-300'],
          tabBarStyle: styles.tabBar,
          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            TabBarIcons({ name: route.name, focused, color })
        })}>
        <Tab.Screen
          name={WELCOME_COACH_SCREEN_NAME}
          component={CoachStackNavigation}
          options={{ title: strings('bottomTab.home') }}
        />
        <Tab.Screen
          name={TRAINING_COACH_SCREEN_NAME}
          component={TrainingStackNavigation}
          options={{ title: strings('bottomTab.training') }}
        />
        <Tab.Screen
          name={CHAT_BOT_SCREEN_NAME}
          component={ChatBotContainer}
          options={{ title: strings('bottomTab.chatBot') }}
        />
        <Tab.Screen
          name={APPOINTMENT_SCREEN_NAME}
          component={AppointmentStackNavigation}
          options={{ title: strings('bottomTab.appointment') }}
        />
        <Tab.Screen
          name={PROFILE_COACH_SCREEN_NAME}
          component={ProfilStackNavigation}
          options={{ title: strings('bottomTab.setting') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default CoachBottomNavigation;
