import React, { useState } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch } from '../../../../hooks/hooks';
import { strings } from '../../../../locales/i18n';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { useLogoutMutation } from '../../../../store/api/authApi';
import { logout } from '../../../../store/slices/authSlice';
import colors from '../../../../utils/constants/colors';
import {
  PROFILE_MEMBER_STACK_SCREEN_NAME,
  COMPLETE_PROFIL_SCREEN_NAME,
  EDIT_MEMBER_SCREEN_NAME,
  WEIGHT_SCREEN_NAME,
  PROGRESS_SCREEN_NAME,
  CHANGE_LANGUAGE_SCREEN_NAME,
  ABOUT_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import {
  retrieveToken,
  setRefreshToken,
  setTokenType
} from '../../../../utils/helpers/useSensitiveInfo';
import ProfilMember from './ProfilMember';
import {
  APROPOS_ICON,
  COMPLETE_PROFILE_ICON,
  LANGUAGE_ICON,
  LOGOUT_ICON,
  MY_ACCOUNT_ICON,
  PROGRESS_ICON,
  TRAKER_WEIGHT_ICON
} from '../../../../utils/constants/icons';

export type ProfilMemberContainerProps = NativeStackScreenProps<
  MemberStackParamList,
  typeof PROFILE_MEMBER_STACK_SCREEN_NAME
>;

const ProfilMemberContainer: React.FC<ProfilMemberContainerProps> = ({
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
      name: strings('labels.completeProfil'),
      icon: COMPLETE_PROFILE_ICON,
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.push(COMPLETE_PROFIL_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.monCompte'),
      icon: MY_ACCOUNT_ICON,
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.push(EDIT_MEMBER_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.trakerWeight'),
      icon: TRAKER_WEIGHT_ICON,
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.push(WEIGHT_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.progress'),
      icon: PROGRESS_ICON,
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.push(PROGRESS_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.changeLanguage'),
      icon: LANGUAGE_ICON,
      customColor: colors['teal-800'],
      onPress: () => {
        navigation.navigate(CHANGE_LANGUAGE_SCREEN_NAME);
      }
    },
    {
      name: strings('labels.aPropos'),
      icon: APROPOS_ICON,
      customColor: colors['teal-800'],
      onPress: () => navigation.navigate(ABOUT_SCREEN_NAME)
    },
    {
      name: strings('actions.logout'),
      icon: LOGOUT_ICON,
      customColor: colors['teal-800'],
      onPress: handleSubmit
    }
  ];

  return <ProfilMember listItems={listItems} />;
};

export default ProfilMemberContainer;
