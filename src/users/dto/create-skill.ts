import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateSkillDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsUUID("4", { each: true })
  users: string[];

  @IsNotEmpty()
  @IsUUID()
  userSkillId: string;
}