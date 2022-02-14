import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // documentation
  const config = new DocumentBuilder()
    .setTitle('Messengero')
    .setDescription('The Messengero  API description')
    .setVersion('1.0')
    .addTag('Messengero')
    .addBearerAuth({ in: 'header', type: 'http' })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document, {
    uiConfig: {
      displayOperationId: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
