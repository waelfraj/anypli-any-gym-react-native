import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './RootStackParamList';
import TabBarIcons from '../components/TabBarIcons/TabBarIcons';

import {
  PROFILE_STAFF_SCREEN_NAME,
  WELCOME_STAFF_SCREEN_NAME
} from '../utils/constants/screenName';
import {
  ProfilStackNavigation,
  StaffStackNavigation
} from './StaffStackNavigation';
import colors from '../utils/constants/colors';
import { strings } from '../locales/i18n';

const StaffBottomNavigation = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primary,

          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            TabBarIcons({ name: route.name, focused, color })
        })}>
        <Tab.Screen
          name={WELCOME_STAFF_SCREEN_NAME}
          component={StaffStackNavigation}
          options={{ title: strings('bottomTab.home') }}
        />
        <Tab.Screen
          name={PROFILE_STAFF_SCREEN_NAME}
          component={ProfilStackNavigation}
          options={{ title: strings('bottomTab.setting') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StaffBottomNavigation;
