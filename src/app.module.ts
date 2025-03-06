import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsTetrisModule } from './boards-tetris/boards-tetris.module';
import { StepBoardTetrisModule } from './step-board-tetris/step-board-tetris.module';

@Module({
  imports: [BoardsTetrisModule, StepBoardTetrisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
