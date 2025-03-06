import { Test, TestingModule } from '@nestjs/testing';
import { StepBoardTetrisService } from './step-board-tetris.service';

describe('StepBoardTetrisService', () => {
  let service: StepBoardTetrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StepBoardTetrisService],
    }).compile();

    service = module.get<StepBoardTetrisService>(StepBoardTetrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
