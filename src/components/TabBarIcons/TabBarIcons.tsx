import type { PropsWithChildren } from 'react';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BARBELL_SELECTED_ICON,
  BARBELL_UNSELECTED_ICON,
  CHATBOX_SELECTED_ICON,
  CHATBOX_UNSELECTED_ICON,
  COG_SELECTED_ICON,
  COG_UNSELECTED_ICON,
  HOME_SELECTED_ICON,
  HOME_UNSELECTED_ICON,
  READER_SELECTED_ICON,
  READER_UNSELECTED_ICON
} from '../../utils/constants/icons';
import {
  APPOINTMENT_SCREEN_NAME,
  CHAT_BOT_SCREEN_NAME,
  PROFILE_COACH_SCREEN_NAME,
  PROFILE_MEMBER_SCREEN_NAME,
  PROFILE_STAFF_SCREEN_NAME,
  TRAINING_COACH_SCREEN_NAME,
  TRAINING_MEMBER_SCREEN_NAME,
  WELCOME_COACH_SCREEN_NAME,
  WELCOME_MEMBER_SCREEN_NAME,
  WELCOME_STAFF_SCREEN_NAME
} from '../../utils/constants/screenName';

type IconsProps = PropsWithChildren<{
  name: string;
  focused: boolean;
  color: string;
}>;

const GetCorrectIcon = ({ name, focused, color }: IconsProps) => {
  const size = 29;
  switch (name) {
    case WELCOME_STAFF_SCREEN_NAME:
    case WELCOME_COACH_SCREEN_NAME:
    case WELCOME_MEMBER_SCREEN_NAME:
      return (
        <Icon
          name={focused ? HOME_SELECTED_ICON : HOME_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
    case PROFILE_STAFF_SCREEN_NAME:
    case PROFILE_COACH_SCREEN_NAME:
    case PROFILE_MEMBER_SCREEN_NAME:
      return (
        <Icon
          name={focused ? COG_SELECTED_ICON : COG_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
    case TRAINING_COACH_SCREEN_NAME:
    case TRAINING_MEMBER_SCREEN_NAME:
      return (
        <Ionicons
          name={focused ? BARBELL_SELECTED_ICON : BARBELL_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
    case CHAT_BOT_SCREEN_NAME:
      return (
        <Ionicons
          name={focused ? CHATBOX_SELECTED_ICON : CHATBOX_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
    case APPOINTMENT_SCREEN_NAME:
      return (
        <Ionicons
          name={focused ? READER_SELECTED_ICON : READER_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
    default:
      return (
        <Icon
          name={focused ? HOME_SELECTED_ICON : HOME_UNSELECTED_ICON}
          size={size}
          color={color}
        />
      );
  }
};

const TabBarIcons = ({ name, focused, color }: IconsProps) => {
  return <GetCorrectIcon name={name} focused={focused} color={color} />;
};

export default TabBarIcons;
