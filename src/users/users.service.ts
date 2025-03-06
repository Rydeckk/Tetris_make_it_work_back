import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { RegisterDto } from 'src/auth/dto/auth.dto';

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
