import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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
}
