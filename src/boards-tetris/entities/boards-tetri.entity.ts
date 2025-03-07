import { ApiProperty } from '@nestjs/swagger';
import { BoardsTetris } from '@prisma/client';

export class BoardsTetrisEntity implements BoardsTetris {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  column: number;
}
