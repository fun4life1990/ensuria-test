import process from 'node:process';
import { INestApplication } from '@nestjs/common';
import { ENV_DEV, ENV_LOCAL } from './constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  //show swagger only in dev and local
  if (
    !process.env.NODE_ENV ||
    ![ENV_LOCAL, ENV_DEV].includes(process.env.NODE_ENV)
  ) {
    return;
  }

  const config = new DocumentBuilder()
    .setTitle(`Gelios (${process.env.NODE_ENV})`)
    .setDescription('Gelios API description')
    .setVersion('0.1')
    .addSecurity('bearer', { type: 'http', scheme: 'bearer' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs/api', app, document);
}
