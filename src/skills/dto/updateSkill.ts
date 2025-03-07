import { PartialType } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill';

export class updateSkill extends PartialType(CreateSkillDto) {}
