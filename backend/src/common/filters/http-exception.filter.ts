import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationException } from '../../errors';
import { ErrorResponseError } from '../../foundation';
import { formatZodErrors } from '../../utils';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errorDetails = exception.getResponse() as ErrorResponseError;

    if (exception instanceof ValidationException) {
      errorDetails.details = formatZodErrors(exception.details.issues);
    }

    response.status(status).json({
      status: 'error',
      error: errorDetails,
    });
  }
}
