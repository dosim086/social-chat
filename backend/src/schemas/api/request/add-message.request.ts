import { z } from 'zod';

export const addMessageRequestSchema = z
  .object({
    chatId: z.string(),
    userId: z.string(),
    text: z.string(),
  })
  .required();

export type AddMessageRequest = z.infer<typeof addMessageRequestSchema>;
