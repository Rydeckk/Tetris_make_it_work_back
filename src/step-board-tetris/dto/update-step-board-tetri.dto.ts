import { PartialType } from '@nestjs/mapped-types';
import { CreateStepBoardTetriDto } from './create-step-board-tetri.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateStepBoardTetriDto extends PartialType(CreateStepBoardTetriDto) {
    @IsString()
    @IsOptional()
    name?: string
    
    @IsInt()
    @IsOptional()
    row?: number

    @IsInt()
    @IsOptional()
    order?: number
}
