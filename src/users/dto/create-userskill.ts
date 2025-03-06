import { IsArray, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
export class CreateUserSkill{
  
    @IsOptional()
    @IsOptional()
    description: string;
  
    @IsArray()
    @IsString({ each: true })
    user: string;

    @IsOptional()
    @IsUUID("4", { each: true })
    weight: number;

    @IsArray()
    @IsUUID("4", { each: true })
    skill: string;
  
  }