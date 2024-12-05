import { RootStackParamList } from './RootStackParamList';
import { CoachStackParamList } from './Coach/CoachStackParamList';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }

  namespace ReactNavigation {
    interface CoachParamList extends CoachStackParamList {}
  }
}
