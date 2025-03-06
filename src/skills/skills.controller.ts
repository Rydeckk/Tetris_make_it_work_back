import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skills, Prisma } from '@prisma/client';
import { CreateSkillDto } from 'src/users/dto/create-skill';
import { CreateUserSkill } from 'src/users/dto/create-userskill';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getAllSkills(){
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

  @Delete(':id')
  async deleteSkill(@Body() skillData: CreateSkillDto){
    return this.skillsService.deleteSkill(skillData);
  }
}
