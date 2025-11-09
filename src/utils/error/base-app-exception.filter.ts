import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import type { LoggerService } from '@nestjs/common';
import { Response } from 'express';
import { HttpArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';

@Catch()
export class BaseAppExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: LoggerService) {}

  catch(exception: Error, host: ArgumentsHost): void | object {
    if (!(exception instanceof HttpException)) {
      this.logger.error(exception);
    }

    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();

    if (response.headersSent) {
      return;
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        return response.status(status).json({
          message: exceptionResponse,
          statusCode: status,
          timestamp: new Date().toISOString(),
        });
      }

      return response.status(status).json({
        ...exceptionResponse,
        timestamp: new Date().toISOString(),
      });
    }

    const status = (exception['status'] as number) || HttpStatus.BAD_REQUEST;
    const message = exception.message || 'Bad Request';

    response.status(status).json({
      message,
      status,
      timestamp: new Date().toISOString(),
    });
  }
}
