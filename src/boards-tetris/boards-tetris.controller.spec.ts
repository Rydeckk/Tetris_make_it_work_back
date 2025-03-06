import { Test, TestingModule } from '@nestjs/testing';
import { BoardsTetrisController } from './boards-tetris.controller';
import { BoardsTetrisService } from './boards-tetris.service';

describe('BoardsTetrisController', () => {
  let controller: BoardsTetrisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardsTetrisController],
      providers: [BoardsTetrisService],
    }).compile();

    controller = module.get<BoardsTetrisController>(BoardsTetrisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
