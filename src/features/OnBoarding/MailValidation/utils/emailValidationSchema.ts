import { z } from 'zod';
import { strings } from '../../../../locales/i18n';

export type MailValidationSchemaType = z.infer<typeof mailValidationSchema>;

export const mailValidationSchema = z.object({
  otp: z.string({ required_error: strings('errors.required_error') })
});
