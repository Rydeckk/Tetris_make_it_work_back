import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { TasksModule } from './tasks/tasks.module';
import { BoardsTetrisModule } from './boards-tetris/boards-tetris.module';
import { StepBoardTetrisModule } from './step-board-tetris/step-board-tetris.module';
import { NotificationModule } from './notification/notification.module';
import { SkillsModule } from './skills/skills.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TasksModule,
    BoardsTetrisModule,
    StepBoardTetrisModule,
    NotificationModule,
    SkillsModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {
  configureSwagger(app: any) {
    const config = new DocumentBuilder()
      .setTitle('Tetris Make It Work API')
      .setDescription('The Tetris Make It Work API description')
      .setVersion('1.0')
      .addTag('tetris')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
