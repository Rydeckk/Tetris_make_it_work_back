import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardsTetriDto } from './create-boards-tetri.dto';
import { IsString } from 'class-validator';

export class UpdateBoardsTetriDto extends PartialType(CreateBoardsTetriDto) {
    @IsString()
    name: string
}
