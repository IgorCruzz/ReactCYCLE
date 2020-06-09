import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import * as express from 'express'
import { resolve } from 'path'
 
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors() 
  app.use('/file', express.static(resolve(__dirname, '..', 'tmp', 'uploads')))
  await app.listen(3333)
}
bootstrap();
