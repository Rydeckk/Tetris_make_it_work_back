import { PartialType } from '@nestjs/mapped-types';
import { CreateStepBoardTetriDto } from './create-step-board-tetri.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateStepBoardTetriDto extends PartialType(
  CreateStepBoardTetriDto,
) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  row: number;

  @IsOptional()
  @IsInt()
  order: number;
}
