import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const initSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('TETRIS: MAKE IT WORKS')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  initSwagger(app);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(
      `Server running at http://localhost:${process.env.PORT ?? 3000}`,
    );
  });
}
bootstrap();
