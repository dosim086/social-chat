import { z } from 'zod';

export const createUserRequestSchema = z
  .object({
    username: z.string(),
  })
  .required();

export type CreateUserRequest = z.infer<typeof createUserRequestSchema>;
