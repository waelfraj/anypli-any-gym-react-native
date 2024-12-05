import React from 'react';
import { WelcomeContainerProps } from '../utils/types';
import {
  LOGIN_SCREEN_NAME,
  REGISTER_SCREEN_NAME
} from '../../../../utils/constants/screenName';
import Welcome from './Welcome';
import useLocalStorage from './../../../../utils/helpers/useAsyncStorage';

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({
  navigation: { navigate }
}): JSX.Element => {
  const [, setIsFirstTime] = useLocalStorage('isFirstTime');
  const initialIsFirstTimeValue = 'false';
  const goToRegister = () => {
    if (setIsFirstTime) {
      setIsFirstTime(initialIsFirstTimeValue);
    }
    navigate(REGISTER_SCREEN_NAME);
  };

  const goToLogin = () => {
    if (setIsFirstTime) {
      setIsFirstTime(initialIsFirstTimeValue);
    }
    navigate(LOGIN_SCREEN_NAME);
  };

  return <Welcome goToLogin={goToLogin} goToRegister={goToRegister} />;
};

export default WelcomeContainer;
