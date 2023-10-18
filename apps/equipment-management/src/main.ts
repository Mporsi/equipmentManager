import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

/*
 * here's where we would define application wide settings, like internal logger, boot up processes etc.
 * It's a bit of a rabit hole, so I'm not going to go down it right now.
 * */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Equipment history api')
    .setDescription('the api for ')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  const logger = new Logger('Bootstrap');

  await app.listen(3000).then(() => {
    logger.log('Listening on  http://localhost:3000');
    logger.log('Swagger on http://localhost:3000/swagger');
  });
}
bootstrap();
