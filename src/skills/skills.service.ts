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
        return this.prisma.skills.create({ data: skillData });
    }

    async affectSkillUser(skillData: CreateUserSkill) {
        return this.prisma.usersSkills.create({ data: {
            skillId: skillData.skill,
            userId: skillData.user,
            weight: skillData.weight,

        } });
    }

    async deleteSkill(skillData: CreateSkillDto) {
        return this.prisma.skills.delete({ where: 
            { id: skillData.userSkillId }
         });
    }
}
