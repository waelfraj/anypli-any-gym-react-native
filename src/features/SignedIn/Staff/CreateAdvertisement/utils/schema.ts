import { z } from 'zod';
import { strings } from '../../../../../locales/i18n';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

export const createAdvertisementSchema = z.object({
  name: z.string({ required_error: strings('errors.required_error') }),
  description: z.string({ required_error: strings('errors.required_error') }),
  image: z.any().optional()
  // .refine((file) => {
  //   return !file || file.size <= MAX_UPLOAD_SIZE;
  // }, 'File size must be less than 3MB')
  // .refine((file) => {
  //   return file && ACCEPTED_FILE_TYPES.includes(file.type);
  // }, 'File must be a PNG')
});

export type createAdvertisementType = z.infer<typeof createAdvertisementSchema>;
