import { z } from 'zod';
import { strings } from '../../../../locales/i18n';
import { MAX_LENGTH_PASSWORD, MIN_LENGTH_PASSWORD } from './constants';

export const LoginSchema = z.object({
  email: z
    .string({ required_error: strings('errors.required_error') })
    .email({ message: strings('errors.emailValidation') }),
  password: z
    .string({ required_error: strings('errors.required_error') })
    .min(MIN_LENGTH_PASSWORD, { message: strings('errors.passwordShort') })
    .max(MAX_LENGTH_PASSWORD, { message: strings('errors.passwordLong') })
});
//TOD: nameField here
export type LoginSchemaType = z.infer<typeof LoginSchema>;
