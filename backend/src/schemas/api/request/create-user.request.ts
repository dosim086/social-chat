import { z } from 'zod';

export const createUserRequestSchema = z
  .object({
    username: z.string().trim(),
  })
  .required();

export type CreateUserRequest = z.infer<typeof createUserRequestSchema>;
