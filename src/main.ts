import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');


  const config = new DocumentBuilder()
    .setTitle('Simple book service')
    .setDescription('Vertolotik')
    .setVersion('1')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('docs', app, document)

  await app.listen(process.env.PORT, () => {
    console.log('Server started at PORT: ' + process.env.PORT)
  });
}
bootstrap();
