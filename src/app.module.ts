import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { TasksModule } from './tasks/tasks.module';
import { BoardsTetrisModule } from './boards-tetris/boards-tetris.module';
import { StepBoardTetrisModule } from './step-board-tetris/step-board-tetris.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TasksModule,
    BoardsTetrisModule,
    StepBoardTetrisModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
