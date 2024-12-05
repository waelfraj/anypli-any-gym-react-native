import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { roles } from '../../../../../enums/roles';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { usePopupActions } from '../../../../../hooks/usePopupActions';
import { strings } from '../../../../../locales/i18n';
import { useLazyGetHomeStaffDataQuery } from '../../../../../store/api/staffApi';
import colors from '../../../../../utils/constants/colors';
import {
  CREATE_ADVERTISEMENT_SCREEN_NAME,
  CREATE_STAFF_SCREEN_NAME,
  LIST_COACHES_SCREEN_NAME,
  LIST_MEMBERS_STAFF_SCREEN_NAME,
  LIST_STAFF_SCREEN_NAME
} from '../../../../../utils/constants/screenName';
import WelcomeStaff from './WelcomeStaff';

import { homeStaffsInitialState } from '../../../../../store/slices/homeStaffSlice';
import {
  ERROR_NETWORK,
  UNAUTHENTICATED_STATUS
} from '../../../../../utils/constants/errors';
import { COACH_ICON, MEMBER_ICON, STAFF_ICON } from '../utils/constants';

const WelcomeStaffContainer = (): JSX.Element => {
  const navigation = useNavigation();
  const name = useAppSelector((state) => state.auth.user.username);
  const role = useAppSelector((state) => state.auth.user.role);
  const {
    showLoadingError,
    showUnauthenticatedError,
    showInternalServerError
  } = usePopupActions();
  const [trigger, { data, error, isLoading }] = useLazyGetHomeStaffDataQuery();

  useEffect(() => {
    trigger({});
  }, [trigger]);

  const nbrUsers = {
    role,
    nbrMembers: data?.nbrMembers,
    nbrCoaches: data?.nbrCoaches,
    nbrStaffs: data?.nbrStaffs
  };

  const staffHome = useAppSelector((state) => state.staffHome);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      homeStaffsInitialState({
        nbrCoaches: parseInt(data?.nbrCoaches || '0'),
        nbrMembers: parseInt(data?.nbrMembers || '0'),
        nbrStaffs: parseInt(data?.nbrStaffs || '0')
      })
    );
  }, [data]);

  const cardItems = [
    {
      title: strings('labels.member'),
      description: staffHome.nbrMembers.toString(),
      bgColor: colors['green-500'],
      iconName: MEMBER_ICON,
      iconColor: colors['green-800'],
      onPress: () => {
        navigation.navigate(LIST_MEMBERS_STAFF_SCREEN_NAME);
      }
    },
    {
      title: strings('labels.coach'),
      description: staffHome.nbrCoaches.toString(),
      bgColor: colors['blue-500'],
      iconName: COACH_ICON,
      iconColor: colors['blue-900'],
      onPress: () => {
        navigation.navigate(LIST_COACHES_SCREEN_NAME);
      }
    }
  ];

  if (nbrUsers.role == roles.ADMIN_ROLE_ID) {
    cardItems.push({
      title: strings('labels.staff'),
      description: staffHome.nbrStaffs.toString(),
      bgColor: colors['orange-400'],
      iconName: STAFF_ICON,
      iconColor: colors['orange-800'],
      onPress: () => {
        navigation.navigate(LIST_STAFF_SCREEN_NAME);
      }
    });
  }

  useEffect(() => {
    if (
      error !== undefined &&
      'status' in error &&
      error.status === UNAUTHENTICATED_STATUS
    ) {
      showUnauthenticatedError();
    } else if (
      error !== undefined &&
      'name' in error &&
      error.name === ERROR_NETWORK
    ) {
      showInternalServerError();
    } else if (error !== undefined) {
      showLoadingError();
    }
  }, [error]);

  const handleGoToCreateAdvertisement = () => {
    navigation.navigate(CREATE_ADVERTISEMENT_SCREEN_NAME);
  };

  const handleGoToCreateStaff = () => {
    navigation.navigate(CREATE_STAFF_SCREEN_NAME);
  };

  return (
    <WelcomeStaff
      cardItems={cardItems}
      name={name}
      onPress={() => navigation.navigate(LIST_MEMBERS_STAFF_SCREEN_NAME)}
      role={role}
      isLoading={isLoading}
      onRefresh={trigger}
      handleGoToCreateStaff={handleGoToCreateStaff}
      handleGoToCreateAdvertisement={handleGoToCreateAdvertisement}
    />
  );
};

export default WelcomeStaffContainer;
