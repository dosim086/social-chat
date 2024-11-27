import { HttpStatus } from '@nestjs/common';
import { Types } from 'mongoose';

export type ObjectId = Types.ObjectId;

export type ErrorResponseError = {
  message: string;
  error: string;
  statusCode: HttpStatus;
  details?: object;
};
