import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
 * here's where we would define application wide settings, like internal logger, boot up processes etc.
 * It's a bit of a rabit hole, so I'm not going to go down it right now.
 * */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
