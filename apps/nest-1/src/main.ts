import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Nest1Module } from './nest-1.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(Nest1Module,{
    transport:Transport.TCP,
    host: 'localhost',
    port:4000
  });
  await app.listen(() => console.log('nest-1 micro service has started at http://localhost:4000'));
}
bootstrap();
