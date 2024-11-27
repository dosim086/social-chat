import { PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { ValidationException } from '../../errors';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch (error: unknown) {
      throw new ValidationException(error as ZodError);
    }
  }
}
