import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Skills, Prisma } from '@prisma/client';
import { CreateSkillDto } from 'src/users/dto/create-skill';
import { UsersSkills } from '@prisma/client';
import { CreateUserSkill } from 'src/users/dto/create-userskill';

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
    /*async changeSkillUser(skillData: CreateUserSkill) {
        return this.prisma.usersSkills.update({ where: { userId: skillData.user }, data: {
            skillId: skillData.skill,
            userId: skillData.user,
            weight: skillData.weight,
            //image: skillData.image,
        } });
    }*/

    /*async deleteSkill(skillData: CreateSkillDto) {
        return this.prisma.skills.delete({ where: { name: skillData.name } });
    }*/
}
