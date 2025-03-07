import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { FindAllUserSkillsDto } from './dto/find-all-user-skills.dto';
import { FindAllUserSkillsWeightDto } from './dto/find-all-user-skills-weight.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(data: RegisterDto) {
    return this.prisma.users.create({
      data,
    });
  }

  async findUser(where: Prisma.UsersWhereUniqueInput) {
    return this.prisma.users.findUnique({
      where,
    });
  }

  async findAll() {
    return this.prisma.users.findMany();
  }

  async findUserSkillsMoreWeight(
    findAllUserSkillsWeightDto: FindAllUserSkillsWeightDto,
  ) {
    const usersWithSkill = await this.prisma.users.findMany({
      where: {
        userSkills: { some: { skillId: findAllUserSkillsWeightDto.skillId } },
      },
      include: { userSkills: { include: { user: true } } },
    });

    const userWithSkillSort = usersWithSkill.sort((a, b) => {
      const maxWeightA = Math.max(
        ...a.userSkills.map((userSkill) => userSkill.weight),
      );
      const maxWeightB = Math.max(
        ...b.userSkills.map((userSkill) => userSkill.weight),
      );
      return maxWeightB - maxWeightA;
    });

    if (userWithSkillSort.length > findAllUserSkillsWeightDto.limit) {
      return userWithSkillSort.slice(0, findAllUserSkillsWeightDto.limit);
    }

    return userWithSkillSort;
  }

  async findUserSkills(findAllUserSkillsDto: FindAllUserSkillsDto) {
    return this.prisma.users.findFirst({
      where: { id: findAllUserSkillsDto.userId },
      include: { userSkills: { include: { skill: true } } },
    });
  }

  async update({ userId, ...data }: UpdateUserDto) {
    return this.prisma.users.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  async deleteCurrentUser(userId: string) {
    return this.prisma.users.delete({
      where: {
        id: userId,
      },
    });
  }
}
