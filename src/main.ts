import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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


  await app.listen(3000);
}
bootstrap();
