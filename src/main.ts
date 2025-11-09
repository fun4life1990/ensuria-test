import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { BaseAppExceptionFilter } from './utils/error/base-app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalFilters(
    new BaseAppExceptionFilter(
      new Logger(BaseAppExceptionFilter.constructor.name),
    ),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      strictGroups: true,
    }),
  );

  setupSwagger(app);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap()
  .then(() => {
    console.log('NestJS web app started successfully');
  })
  .catch((error) => {
    console.error('NestJS web app failed to start:', error);
  });
