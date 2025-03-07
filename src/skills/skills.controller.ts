import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Put,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skills, Prisma } from '@prisma/client';
import { CreateSkillTask } from './dto/create-skillTask';
import { CreateSkillDto } from './dto/create-skill';
import { CreateUserSkill } from './dto/create-userskill';
import { updateSkill } from './dto/updateSkill';

/* Sequence :
1 - Post Skill and retrieve the skillId
2 - Post an Affect request to link the skilldId to the userId, retrieve an array of SkillId
3 - 1 by 1 Get the SkillId
*/

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getAllSkills() {
    return this.skillsService.getAllSkills();
  }

  @Get(':id')
  async getSkillById(@Param('id') id: string) {
    return this.skillsService.getSkillById(id);
  }

  @Post()
  async createSkill(@Body() skillData: CreateSkillDto) {
    return this.skillsService.createSkill(skillData);
  }

  @Post('affect')
  async affectSkillUser(@Body() skillData: CreateUserSkill) {
    return this.skillsService.affectSkillUser(skillData);
  }

  @Get('byuserid/:userId')
  async getSkillbyUserId(@Param('userId') userId: string) {
    return this.skillsService.getSkillbyUserId(userId);
  }

  @Post('skilltask')
  async createskilltask(@Body() skilldata: CreateSkillTask) {
    return this.skillsService.affectSkillTask(skilldata);
  }

  @Patch('change')
  async changeSkillUser(@Body() skillData: CreateUserSkill) {
    return this.skillsService.changeSkillUser(skillData);
  }

  @Patch('change-skills')
  async changeSkill(@Body() skillData: updateSkill) {
    console.log(skillData);
    return this.skillsService.changeSkill(skillData);
  }

  @Delete('delete/:id')
  async deleteSkill(@Param('id') id: string) {
    return this.skillsService.deleteSkill(id);
  }
}
