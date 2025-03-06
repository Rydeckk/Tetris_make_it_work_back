import { Injectable } from '@nestjs/common';
import { CreateStepBoardTetriDto } from './dto/create-step-board-tetri.dto';
import { UpdateStepBoardTetriDto } from './dto/update-step-board-tetri.dto';
import { PrismaService } from 'src/prisma.service';
import { FindAllByBoardDto } from './dto/find-all-by-board.dto';

@Injectable()
export class StepBoardTetrisService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStepBoardTetriDto: CreateStepBoardTetriDto) {
    const maxStepOrder = await this.prisma.stepBoardTetris.findFirst({
      where: { boardTetrisId: createStepBoardTetriDto.boardTetrisId },
      orderBy: { order: 'desc' },
    });

    return this.prisma.stepBoardTetris.create({
      data: {
        name: createStepBoardTetriDto.name,
        boardTetris: {
          connect: {
            id: createStepBoardTetriDto.boardTetrisId,
          },
        },
        order: maxStepOrder.order + 1,
      },
    });
  }

  findAll(findAllByBoardDto: FindAllByBoardDto) {
    return this.prisma.stepBoardTetris.findMany({
      where: { boardTetrisId: findAllByBoardDto.boardTetrisId },
      orderBy: { order: 'asc' },
    });
  }

  async update(id: string, updateStepBoardTetriDto: UpdateStepBoardTetriDto) {
    if (updateStepBoardTetriDto.order) {
      const stepTetrisOrder = await this.prisma.stepBoardTetris.findMany({
        where: {
          boardTetrisId: updateStepBoardTetriDto.boardTetrisId,
          order: { gte: updateStepBoardTetriDto.order },
        },
      });

      stepTetrisOrder.forEach(async (stepTetris) => {
        await this.prisma.stepBoardTetris.update({
          where: { id: stepTetris.id },
          data: {
            order: stepTetris.order + 1,
          },
        });
      });
    }

    return this.prisma.stepBoardTetris.update({
      where: { id: id },
      data: {
        name: updateStepBoardTetriDto.name,
        row: updateStepBoardTetriDto.row,
        order: updateStepBoardTetriDto.order,
      },
    });
  }

  async remove(id: string) {
    const stepBoardTetrisToDelete = await this.prisma.stepBoardTetris.findFirst(
      { where: { id: id } },
    );

    const stepTetrisOrder = await this.prisma.stepBoardTetris.findMany({
      where: {
        boardTetrisId: stepBoardTetrisToDelete.boardTetrisId,
        order: { gte: stepBoardTetrisToDelete.order },
      },
    });

    stepTetrisOrder.forEach(async (stepTetris) => {
      await this.prisma.stepBoardTetris.update({
        where: { id: stepTetris.id },
        data: {
          order: stepTetris.order - 1,
        },
      });
    });

    return this.prisma.stepBoardTetris.delete({
      where: { id: id },
    });
  }
}
