import { Types } from 'mongoose';
import { z } from 'zod';

export const createChatRequestSchema = z
  .object({
    name: z.string(),
    participants: z
      .array(
        z
          .string()
          .trim()
          .refine((val) => Types.ObjectId.isValid(val), {
            message: 'Invalid ObjectId',
          }),
      )
      .min(1)
      // duplicate userID can be removed after success validation
      .transform((val) => [...new Set(val)]),
  })
  .required();

export type CreateChatRequest = z.infer<typeof createChatRequestSchema>;
