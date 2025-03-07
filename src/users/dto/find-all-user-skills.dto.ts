import { IsUUID } from 'class-validator';

export class FindAllUserSkillsDto {
  @IsUUID()
  userId: string;
}
