import { BadRequestException } from '@nestjs/common';
import { ZodError } from 'zod';

export class ValidationException extends BadRequestException {
  constructor(public details: ZodError) {
    super('Validation error');
  }
}
