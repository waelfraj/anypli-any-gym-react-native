import React from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Loading from '../../../../components/Loading/Loading';
import { useAppSelector } from '../../../../hooks/hooks';
import { MemberStackParamList } from '../../../../navigations/Member/MemberStackParamList';
import { useGetLastAdvetisementQuery } from '../../../../store/api/createAdvertisementApi';
import { WELCOME_MEMBER_STACK_SCREEN_NAME } from '../../../../utils/constants/screenName';
import WelcomeMember from './WelcomeMember';

/**
 * Container used to separate WelcomeMember logic as a wrapper to WelcomeMember screen
 * @returns JSX.Element
 */
interface WelcomeMemberContainerProps
  extends NativeStackScreenProps<
    MemberStackParamList,
    typeof WELCOME_MEMBER_STACK_SCREEN_NAME
  > {}

const WelcomeMemberContainer: React.FC<WelcomeMemberContainerProps> = ({
  navigation
}): JSX.Element => {
  const { data, error, isLoading } = useGetLastAdvetisementQuery({});

  const username = useAppSelector((state) => state.auth.user.username);
  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    <WelcomeMember advertisement={data} username={username} />
  );
};

export default WelcomeMemberContainer;
