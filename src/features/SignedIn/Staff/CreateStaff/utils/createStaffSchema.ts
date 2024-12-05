import { z } from 'zod';
import { strings } from '../../../../../locales/i18n';
import {
  MAX_LENGTH_PASSWORD,
  MAX_LENGTH_PHONE,
  MIN_LENGTH_PASSWORD,
  MIN_LENGTH_PHONE
} from './constants';

export const CreateStaffSchema = z.object({
  username: z.string({ required_error: strings('errors.required_error') }),
  email: z
    .string({ required_error: strings('errors.required_error') })
    .email({ message: strings('errors.emailValidation') }),
  phone: z.string().min(MIN_LENGTH_PHONE).max(MAX_LENGTH_PHONE).optional(),
  address: z.string().optional(),
  password: z
    .string({ required_error: strings('errors.required_error') })
    .min(MIN_LENGTH_PASSWORD, { message: strings('errors.passwordShort') })
    .max(MAX_LENGTH_PASSWORD, { message: strings('errors.passwordLong') })
});
export type CreateStaffSchemaType = z.infer<typeof CreateStaffSchema>;
