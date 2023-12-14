import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
const logger = new Logger();
const PORT = 3002;
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { port: PORT },
    },
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
  logger.log('Microservice run on port' + PORT);
}

bootstrap();
