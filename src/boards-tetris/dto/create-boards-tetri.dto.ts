import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBoardsTetriDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsUUID('4', { each: true })
  usersId: string[];
}
