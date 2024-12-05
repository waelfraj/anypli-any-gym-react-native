import { GestureResponderEvent } from 'react-native';

export const PERSON_ICON = 'person';
export const PERSON_ICON_OUTLINE = 'person-outline';

export const PERSON_ADD_ICON = 'person-add-outline';
export const ADVERTISEMENT_ADD_ICON = 'albums-outline';

export const STAFF_ICON = 'person-outline';
export const COACH_ICON = 'body-outline';
export const MEMBER_ICON = 'people-circle';

export interface CardItemsType {
  title: string;
  description: string;
  bgColor: string;
  iconName: string;
  iconColor: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export interface WelcomeStaffProps {
  name?: string;
  cardItems: CardItemsType[];
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  role: string | undefined;
  isLoading: boolean;
  onRefresh: any;
  handleGoToCreateStaff: (event: GestureResponderEvent) => void;
  handleGoToCreateAdvertisement: (event: GestureResponderEvent) => void;
}
