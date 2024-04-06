import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    // class-validator
    new ValidationPipe({
      // options here...
    }),
  );

  await app.listen(3000);
}
bootstrap();
