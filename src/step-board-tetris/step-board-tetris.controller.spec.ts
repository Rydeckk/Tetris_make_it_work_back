import { Test, TestingModule } from '@nestjs/testing';
import { StepBoardTetrisController } from './step-board-tetris.controller';
import { StepBoardTetrisService } from './step-board-tetris.service';

describe('StepBoardTetrisController', () => {
  let controller: StepBoardTetrisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepBoardTetrisController],
      providers: [StepBoardTetrisService],
    }).compile();

    controller = module.get<StepBoardTetrisController>(StepBoardTetrisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
