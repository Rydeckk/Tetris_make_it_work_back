import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Skills, Prisma } from '@prisma/client';
import { CreateSkillDto } from 'src/skills/dto/create-skill';
import { UsersSkills } from '@prisma/client';
import { CreateUserSkill } from 'src/skills/dto/create-userskill';
import { CreateSkillTask } from './dto/create-skillTask';
import { updateSkill } from './dto/updateSkill';


@Injectable()
export class SkillsService {
    constructor(private prisma: PrismaService) { }
    

    async getAllSkills() {
        return this.prisma.skills.findMany();
    }

    async getSkillById(id: string) {
        return this.prisma.skills.findUnique({ where: { id } });
    }

    async createSkill(skillData: CreateSkillDto) {
       
        return this.prisma.skills.create({ data: {
            name: skillData.name,
            image: skillData.image,
            //userSkill: 
        }});
    }

    async affectSkillUser(skillData: CreateUserSkill) {
        return this.prisma.usersSkills.create({ data: {
            skillId: skillData.skillId,
            userId: skillData.user,
            weight: skillData.weight
            //image: skillData.image,
        } });
    }

    async getSkillbyUserId(userId: string){
        return this.prisma.usersSkills.findMany({where: {userId}})
    }
    async affectSkillTask (skillData: CreateSkillTask){
        console.log(skillData);
        return this.prisma.skillsTasks.create({ data: {
            skillId : skillData.skillId,
            taskId: skillData.taskId
        }});
    }
    async changeSkillUser({ skillId, user, weight}: CreateUserSkill) {
        return this.prisma.usersSkills.update({ where: { userId_skillId : {userId: user, skillId}}, 
            data: {skillId,userId: user, weight }
        });
    }

    async changeSkill({name, image, id} : updateSkill){
        return this.prisma.skills.update({where: {id}, data: {
            name,image
        }})
    }

    async deleteSkill(skillId: string) {
        return this.prisma.skills.delete({ where: { id:skillId} });
    }
}
