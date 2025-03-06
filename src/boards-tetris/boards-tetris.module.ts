import { Module } from '@nestjs/common';
import { BoardsTetrisService } from './boards-tetris.service';
import { BoardsTetrisController } from './boards-tetris.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BoardsTetrisController],
  providers: [BoardsTetrisService, PrismaService],
})
export class BoardsTetrisModule {}
