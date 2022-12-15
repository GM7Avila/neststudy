import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GamesModule } from './game-register/games.module';

async function bootstrap() {
  const app = await NestFactory.create(GamesModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, //não passa informação não listada
      forbidNonWhitelisted: true, //não permite o conjunto da informação não listada
      transform: true, //tipar o objeto com o dto
    }
  ));

  await app.listen(3000);
}
bootstrap();
