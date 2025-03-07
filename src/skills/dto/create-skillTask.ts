import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
export class CreateSkillTask{

    
    @IsUUID("4", { each: true })
    skillId : string
    
    @IsUUID("4", { each: true })
    taskId: string
    
}