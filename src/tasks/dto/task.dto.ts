import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  company: string;

  @IsNotEmpty()
  @IsUUID()
  stepBoardTetrisId: string;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsNotEmpty()
  @IsUUID()
  taskId: string;
}
