import { Injectable } from '@nestjs/common';
import { CreateBoardsTetriDto } from './dto/create-boards-tetri.dto';
import { UpdateBoardsTetriDto } from './dto/update-boards-tetri.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BoardsTetrisService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBoardsTetriDto: CreateBoardsTetriDto) {
    const stepBoardToCreate = [
      { name: 'To Do', order: 1 },
      { name: 'In progress', order: 2 },
      { name: 'Finish', order: 3 },
    ];

    return this.prisma.boardsTetris.create({
      data: {
        name: createBoardsTetriDto.name,
        stepBoardTetris: {
          createMany: {
            data: stepBoardToCreate,
          },
        },
        usersBoards: {
          createMany: {
            data: createBoardsTetriDto.userIds.map((userId) => ({ userId })),
          },
        },
      },
    });
  }

  async findAll(userId?: string) {
    const boardTetris = await this.prisma.boardsTetris.findMany({
      where: { usersBoards: { some: { userId: userId } } },
      include: { stepBoardTetris: { include: { tasks: true } } },
    });

    return boardTetris.map((board) => ({
      ...board,
      stepBoardTetris: board.stepBoardTetris.sort((a, b) => a.order - b.order),
    }));
  }

  findOne(boardTetrisId: string) {
    return this.prisma.boardsTetris.findUnique({
      where: { id: boardTetrisId },
      include: { stepBoardTetris: true, usersBoards: true },
    });
  }

  update(boardTetrisId: string, updateBoardsTetriDto: UpdateBoardsTetriDto) {
    return this.prisma.boardsTetris.update({
      where: { id: boardTetrisId },
      data: { name: updateBoardsTetriDto.name },
    });
  }

  remove(boardTetrisId: string) {
    return this.prisma.boardsTetris.delete({
      where: { id: boardTetrisId },
    });
  }
}
