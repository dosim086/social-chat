import { Types } from 'mongoose';
import { z } from 'zod';

export const addMessageRequestSchema = z
  .object({
    chatId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid ObjectId',
      }),
    userId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid ObjectId',
      }),
    text: z.string().trim(),
  })
  .required();

export type AddMessageRequest = z.infer<typeof addMessageRequestSchema>;
