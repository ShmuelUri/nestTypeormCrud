import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { Request, Response } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    const options = new DocumentBuilder()
    .setTitle('Books Market')
    .setDescription('The books API description')
    .setVersion('1.0')
    .addTag('author')
    .addTag('book')
    .addTag('category')
    .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api/docs', app, document);

    // app.use(logger);
  await app.listen(3000);
}
bootstrap();

//  function logger(req: Request, res: Response, next: Function) {
//   console.log(`Request ${req.body}`);
//   console.log(`Response ${res.json()}`)

//   next();
// };
