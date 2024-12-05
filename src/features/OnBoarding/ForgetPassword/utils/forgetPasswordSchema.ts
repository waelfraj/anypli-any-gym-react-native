import { z } from 'zod';
import { strings } from '../../../../locales/i18n';
export const forgetPasswordEmailSchema = z.object({
  email: z
    .string({ required_error: strings('errors.required_error') })
    .email({ message: strings('errors.emailValidation') })
});
export type ForgetPasswordEmailSchemaType = z.infer<
  typeof forgetPasswordEmailSchema
>;

export const forgetPasswordOTPSchema = z.object({
  otp: z.string({ required_error: strings('errors.required_error') })
});
export type ForgetPasswordOTPSchemaType = z.infer<
  typeof forgetPasswordOTPSchema
>;

export const forgetPasswordResetSchema = z
  .object({
    password: z.string({ required_error: strings('errors.required_error') }),
    confirmPassword: z.string({
      required_error: strings('errors.required_error')
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: strings('errors.passwordDontMatch'),
    path: ['confirmPassword']
  });
export type ForgetPasswordResetSchemaType = z.infer<
  typeof forgetPasswordResetSchema
>;
