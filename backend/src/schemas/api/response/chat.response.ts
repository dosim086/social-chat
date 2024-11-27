import { z } from 'zod';

export const chatResponseSchema = z
  .object({
    _id: z.string(),
    name: z.string(),
    participants: z.string(),
  })
  .required();

export type ChatResponse = z.infer<typeof chatResponseSchema>;
