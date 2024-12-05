import React, { useEffect } from 'react';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import Loading from '../../../../components/Loading/Loading';
import { usePopupActions } from '../../../../hooks/usePopupActions';
import { CoachStackParamList } from '../../../../navigations/Coach/CoachStackParamList';
import { useGetLastAdvetisementQuery } from '../../../../store/api/createAdvertisementApi';
import {
  ERROR_NETWORK,
  UNAUTHENTICATED_STATUS
} from '../../../../utils/constants/errors';
import { WELCOME_COACH_STACK_SCREEN_NAME } from '../../../../utils/constants/screenName';
import WelcomeCoach from './WelcomeCoach';
/**
 * Container used to separate WelcomeCoach logic as a wrapper to WelcomeCoach screen
 * @returns JSX.Element
 */
interface WelcomeCoachContainerProps
  extends NativeStackScreenProps<
    CoachStackParamList,
    typeof WELCOME_COACH_STACK_SCREEN_NAME
  > {}

const WelcomeCoachContainer: React.FC<WelcomeCoachContainerProps> = ({
  navigation
}): JSX.Element => {
  const { data, error, isLoading } = useGetLastAdvetisementQuery({});
  const {
    showUnauthenticatedError,
    showInternalServerError,
    showLoadingError
  } = usePopupActions();

  useEffect(() => {
    if (error !== undefined && 'status' in error) {
      if (error.status === UNAUTHENTICATED_STATUS) {
        showUnauthenticatedError();
      }
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

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  } else {
    return <WelcomeCoach advertisement={data} />;
  }
};

export default WelcomeCoachContainer;
