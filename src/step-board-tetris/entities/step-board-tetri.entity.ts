import { ApiProperty } from '@nestjs/swagger';
import { StepBoardTetris } from '@prisma/client';

export class StepBoardTetrisEntity implements StepBoardTetris {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  boardTetrisId: string;

  @ApiProperty()
  row: number;

  @ApiProperty()
  order: number;
}
