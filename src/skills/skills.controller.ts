import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skills, Prisma } from '@prisma/client';
import { CreateSkillDto } from 'src/users/dto/create-skill';
import { CreateUserSkill } from 'src/users/dto/create-userskill';


/* Sequence :
1 - Post Skill and retrieve the skillId
2 - Post an Affect request to link the skilldId to the userId, retrieve an array of SkillId
3 - 1 by 1 Get the SkillId
*/

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

  @Get ('byuserid/:userId')
  async getSkillbyUserId(@Param('userId') userId: string){
    return this.skillsService.getSkillbyUserId(userId);
  }

  /*@Patch('change')
  async changeSkillUser(@Body() skillData: CreateUserSkill) {
    return this.skillsService.changeSkillUser(skillData);
  }*/

  /*@Delete()
  async deleteSkill(@Body() skillData: CreateSkillDto){
    return this.skillsService.deleteSkill(skillData);
  }*/
}
