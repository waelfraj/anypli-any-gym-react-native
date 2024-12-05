import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBarIcons from '../../components/TabBarIcons/TabBarIcons';

import ChatBotContainer from '../../features/SignedIn/Member/ChatBot/ChatBot.container';
import { strings } from '../../locales/i18n';
import colors from '../../utils/constants/colors';
import {
  APPOINTMENT_SCREEN_NAME,
  CHAT_BOT_SCREEN_NAME,
  PROFILE_MEMBER_SCREEN_NAME,
  TRAINING_MEMBER_SCREEN_NAME,
  WELCOME_MEMBER_SCREEN_NAME
} from '../../utils/constants/screenName';
import {
  AppointmentStackNavigation,
  MemberStackNavigation,
  ProfilStackNavigation,
  TrainingStackNavigation
} from './MemberStackNavigation';
import { MemberStackParamList } from './MemberStackParamList';
import { styles } from './memberNavigatorStyle';

const MemberBottomNavigation = () => {
  const Tab = createBottomTabNavigator<MemberStackParamList>();

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
          name={WELCOME_MEMBER_SCREEN_NAME}
          component={MemberStackNavigation}
          options={{ title: strings('bottomTab.home') }}
        />
        <Tab.Screen
          name={TRAINING_MEMBER_SCREEN_NAME}
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
          name={PROFILE_MEMBER_SCREEN_NAME}
          component={ProfilStackNavigation}
          options={{ title: strings('bottomTab.setting') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MemberBottomNavigation;
