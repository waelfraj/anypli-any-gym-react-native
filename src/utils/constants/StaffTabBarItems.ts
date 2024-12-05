import ProfilStaffContainer from '../../features/SignedIn/Staff/ProfilStaff/screens/ProfilStaff.container';
import { StaffStackNavigation } from '../../navigations/StaffStackNavigation';

import {
  PROFILE_STAFF_SCREEN_NAME,
  WELCOME_STAFF_SCREEN_NAME
} from './screenName';

export const StaffTabBarItems = [
  {
    name: WELCOME_STAFF_SCREEN_NAME,
    component: StaffStackNavigation,
    title: 'Welcome'
  },
  {
    name: PROFILE_STAFF_SCREEN_NAME,
    component: ProfilStaffContainer,
    title: 'Profile'
  }
];
