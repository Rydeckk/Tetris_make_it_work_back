import { Controller, Get, Post, Body, Param, Delete, Patch, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
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

@ApiTags('skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @ApiOperation({ summary: 'Get all skills' })
  @ApiResponse({ status: 200, description: 'Return all skills.' })
  @Get()
  async getAllSkills(){
    return this.skillsService.getAllSkills();
  }

  @ApiOperation({ summary: 'Get skill by ID' })
  @ApiResponse({ status: 200, description: 'Return skill by ID.' })
  @Get(':id')
  async getSkillById(@Param('id') id: string) {
    return this.skillsService.getSkillById(id);
  }

  @ApiOperation({ summary: 'Create a new skill' })
  @ApiResponse({ status: 201, description: 'The skill has been successfully created.' })
  @Post()
  async createSkill(@Body() skillData: CreateSkillDto) {
    return this.skillsService.createSkill(skillData);
  }

  @ApiOperation({ summary: 'Affect a skill to a user' })
  @ApiResponse({ status: 201, description: 'The skill has been successfully affected to the user.' })
  @Post('affect')
  async affectSkillUser(@Body() skillData: CreateUserSkill) {
    return this.skillsService.affectSkillUser(skillData);
  }

  @ApiOperation({ summary: 'Get skills by user ID' })
  @ApiResponse({ status: 200, description: 'Return skills by user ID.' })
  @Get('byuserid/:userId')
  async getSkillbyUserId(@Param('userId') userId: string){
    return this.skillsService.getSkillbyUserId(userId);
  }

  @ApiOperation({ summary: 'Affect a skill to a task' })
  @ApiResponse({ status: 201, description: 'The skill has been successfully affected to the task.' })
  @Post('skilltask')
  async createskilltask(@Body() skilldata: CreateSkillTask){
    return this.skillsService.affectSkillTask(skilldata);
  }

  @ApiOperation({ summary: 'Change skill user' })
  @ApiResponse({ status: 200, description: 'The skill user has been successfully changed.' })
  @Patch('change')
  async changeSkillUser(@Body() skillData: CreateUserSkill) {
    return this.skillsService.changeSkillUser(skillData);
  }

  @ApiOperation({ summary: 'Change skill' })
  @ApiResponse({ status: 200, description: 'The skill has been successfully changed.' })
  @Patch('change-skills')
  async changeSkill(@Body() skillData: updateSkill) {
    console.log(skillData)
    return this.skillsService.changeSkill(skillData);
  }

  @ApiOperation({ summary: 'Delete skill by ID' })
  @ApiResponse({ status: 200, description: 'The skill has been successfully deleted.' })
  @Delete('delete/:id')
  async deleteSkill(@Param('id') id: string){
    return this.skillsService.deleteSkill(id);
  }
}
