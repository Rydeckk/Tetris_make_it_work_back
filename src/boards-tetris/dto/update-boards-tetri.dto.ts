import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardsTetriDto } from './create-boards-tetri.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBoardsTetriDto extends PartialType(CreateBoardsTetriDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID('4', { each: true })
  userIds: string[];
}
