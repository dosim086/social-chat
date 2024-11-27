import { z } from 'zod';

export const createChatRequestSchema = z
  .object({
    name: z.string(),
    participants: z.array(z.number()),
  })
  .required();

export type CreateChatRequest = z.infer<typeof createChatRequestSchema>;
