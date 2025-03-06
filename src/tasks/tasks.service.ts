import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTask() {
    return this.prisma.tasks.findMany();
  }

  async getTask(where: Prisma.TasksWhereUniqueInput) {
    return this.prisma.tasks.findUnique({
      where,
    });
  }

  async createTask({ stepBoardTetrisId, ...taskData }: CreateTaskDto) {
    return this.prisma.tasks.create({
      data: {
        ...taskData,
        stepBoardTetris: {
          connect: {
            id: stepBoardTetrisId,
          },
        },
      },
    });
  }

  async updateTask({ taskId, ...taskData }: UpdateTaskDto) {
    return this.prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: taskData,
    });
  }

  async deleteTask(taskId: string) {
    return this.prisma.tasks.delete({
      where: {
        id: taskId,
      },
    });
  }
}
