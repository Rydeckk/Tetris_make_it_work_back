import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateSkillDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsArray()
  @IsUUID('4', { each: true })
  users: string[];
}
