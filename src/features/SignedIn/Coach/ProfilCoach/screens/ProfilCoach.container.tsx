import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import ProfilCoach from './ProfilCoach';
import { logout } from '../../../../../store/slices/authSlice';
import {
  retrieveToken,
  setRefreshToken,
  setTokenType
} from '../../../../../utils/helpers/useSensitiveInfo';
import { useLogoutMutation } from '../../../../../store/api/authApi';
import { useAppDispatch } from '../../../../../hooks/hooks';
import {
  ABOUT_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  EDIT_COACH_SCREEN_NAME,
  PROFILE_COACH_STACK_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import { CoachStackParamList } from '../../../../../navigations/Coach/CoachStackParamList';
import colors from '../../../../../utils/constants/colors';
import { strings } from '../../../../../locales/i18n';

export type ProfilCoachContainerProps = NativeStackScreenProps<
  CoachStackParamList,
  typeof PROFILE_COACH_STACK_SCREEN_NAME
>;

const ProfilCoachContainer: React.FC<ProfilCoachContainerProps> = ({
  navigation
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const [logoutRequest] = useLogoutMutation();
  const [token, setToken] = useState('');
  const setTokenFromAsyncFunction = async () => {
    const retrievedToken = await retrieveToken();
    if (retrievedToken) {
      setToken(retrievedToken);
    }
  };
  setTokenFromAsyncFunction();

  const removeToken = () => {
    setToken('');
    setRefreshToken('');
    setTokenType('');
  };

  const handleSubmit = async () => {
    await logoutRequest(token);
    removeToken();
    dispatch(logout());
  };

  const listItems = [
    {
      name: strings('labels.monCompte'),
      icon: 'navigate-circle-outline',
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.navigate(EDIT_COACH_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.changeLanguage'),
      icon: 'language-outline',
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.navigate(CHANGE_LANGUAGE_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.aPropos'),
      icon: 'information-circle-outline',
      customColor: colors['teal-800'],
      onPress: () => navigation.navigate(ABOUT_SCREEN_NAME)
    },
    {
      name: strings('actions.logout'),
      icon: 'log-out-outline',
      customColor: colors['teal-800'],
      onPress: handleSubmit
    }
  ];

  return <ProfilCoach listItems={listItems} />;
};

export default ProfilCoachContainer;
