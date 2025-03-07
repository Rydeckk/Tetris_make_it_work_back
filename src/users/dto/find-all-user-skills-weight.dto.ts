import { IsInt, IsUUID } from 'class-validator';

export class FindAllUserSkillsWeightDto {
  @IsUUID()
  skillId: string;

  @IsInt()
  limit: number;
}
