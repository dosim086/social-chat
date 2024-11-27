import { Types } from 'mongoose';
import { z } from 'zod';

export const addMessageRequestSchema = z
  .object({
    chatId: z.string().trim().refine(Types.ObjectId.isValid),
    userId: z.string().trim().refine(Types.ObjectId.isValid),
    text: z.string().trim(),
  })
  .required();

export type AddMessageRequest = z.infer<typeof addMessageRequestSchema>;
