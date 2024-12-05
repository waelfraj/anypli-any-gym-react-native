import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import ProfilStaff from './ProfilStaff';
import { logout } from '../../../../../store/slices/authSlice';
import {
  retrieveToken,
  setRefreshToken,
  setTokenType
} from '../../../../../utils/helpers/useSensitiveInfo';
import { useLogoutMutation } from '../../../../../store/api/authApi';
import { useAppDispatch } from '../../../../../hooks/hooks';
import colors from '../../../../../utils/constants/colors';
import {
  ABOUT_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  EDIT_PROFIL_STAFF_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import { PROFILE_STAFF_STACK_SCREEN_NAME } from './../../../../../utils/constants/screenName';
import { RootStackParamList } from '../../../../../navigations/RootStackParamList';
import { strings } from '../../../../../locales/i18n';

export type ProfilStaffContainerProps = NativeStackScreenProps<
  RootStackParamList,
  typeof PROFILE_STAFF_STACK_SCREEN_NAME
>;

const ProfilStaffContainer: React.FC<ProfilStaffContainerProps> = ({
  navigation
}) => {
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
        navigation.navigate(EDIT_PROFIL_STAFF_SCREEN_NAME);
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
      onPress: () => {
        navigation.navigate(ABOUT_SCREEN_NAME);
      }
    },
    {
      name: strings('actions.logout'),
      icon: 'log-out-outline',
      customColor: colors['teal-800'],
      onPress: handleSubmit
    }
  ];

  return <ProfilStaff listItems={listItems} />;
};

export default ProfilStaffContainer;
