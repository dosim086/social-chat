import { Types } from 'mongoose';
import { z } from 'zod';

export const createChatRequestSchema = z
  .object({
    name: z.string(),
    participants: z
      .array(
        z.string().refine((val) => Types.ObjectId.isValid(val), {
          message: 'Invalid ObjectId',
        }),
      )
      .min(1),
  })
  .required();

export type CreateChatRequest = z.infer<typeof createChatRequestSchema>;
