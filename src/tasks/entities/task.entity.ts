import { ApiProperty } from '@nestjs/swagger';
import { Tasks } from '@prisma/client';

export class TaskEntity implements Tasks {
  constructor(partial: Partial<TaskEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  stepBoardTetrisId: string;

  @ApiProperty()
  updatedAt: Date;
}
