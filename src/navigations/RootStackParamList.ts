import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPasswordEmail: undefined;
  ForgetPasswordOTP: undefined;
  ResetPassword: undefined;
  CompleteProfile: undefined;
  EmailValidation: undefined;

  //TODO: Chnage to staffstack etc ...
  WelcomeStaffStack: undefined;
  WelcomeStaff: undefined;
  ProfilStaff: undefined;
  ProfilStaffStack: undefined;
  ListMembersStaff: undefined;
  MemberDetailsStaff: { id?: string };
  CreateStaff: undefined;
  EditProfilStaff: undefined;
  CreateAdvertisement: undefined;
  WelcomeMember: undefined;
  ProfilMember: undefined;
  ListStaffs: undefined;
  StaffDetails: { id?: string };
  ListCoaches: undefined;
  CoachDetails: { id?: string };
  ChangeLanguage: undefined;
  AboutStack: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
