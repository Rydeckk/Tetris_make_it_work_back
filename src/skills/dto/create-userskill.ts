import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
export class CreateUserSkill{
  
    @IsOptional()
    description: string;
  
    @IsString({ each: true })
    user: string;

    @IsOptional()
    @IsNumber()
    weight: number;

    //@IsArray()
    @IsUUID("4", { each: true })
    skillId: string;
    
    
  }