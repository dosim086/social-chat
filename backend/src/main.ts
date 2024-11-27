import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FormatResponseInterceptor, HttpExceptionFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new FormatResponseInterceptor());

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
