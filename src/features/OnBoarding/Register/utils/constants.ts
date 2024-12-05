import { strings } from '../../../../locales/i18n';
import { roles } from '../../../../enums/roles';

export const RoleProp = [
  {
    key: roles.COACH_ROLE_ID.toString(),
    text: strings('labels.coach')
  },
  {
    key: roles.MEMBER_ROLE_ID.toString(),
    text: strings('labels.member')
  }
];

export const GenderProp = [
  {
    key: 'm',
    text: strings('labels.man')
  },
  {
    key: 'f',
    text: strings('labels.woman')
  }
];

export const MIN_LENGTH_PHONE = 8;
export const MIN_LENGTH_PASSWORD = 8;
export const MAX_LENGTH_PHONE = 8;
export const MAX_LENGTH_PASSWORD = 20;

export const PASSWORD_FIELD_NAME = 'password';
export const EMAIL_FIELD_NAME = 'email';
export const USERNAME_FIELD_NAME = 'username';
export const PHONE_FIELD_NAME = 'phone';
export const ADDRESS_FIELD_NAME = 'address';
export const CONFIRM_PASSWORD_FIELD_NAME = 'confirmPassword';
export const ROLE_FIELD_NAME = 'role';
export const GENDER_FIELD_NAME = 'gender';
