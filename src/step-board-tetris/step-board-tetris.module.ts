import { Module } from '@nestjs/common';
import { StepBoardTetrisService } from './step-board-tetris.service';
import { StepBoardTetrisController } from './step-board-tetris.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StepBoardTetrisController],
  providers: [StepBoardTetrisService, PrismaService],
})
export class StepBoardTetrisModule {}
