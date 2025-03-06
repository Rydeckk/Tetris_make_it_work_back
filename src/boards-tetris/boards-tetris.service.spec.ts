import { Test, TestingModule } from '@nestjs/testing';
import { BoardsTetrisService } from './boards-tetris.service';

describe('BoardsTetrisService', () => {
  let service: BoardsTetrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardsTetrisService],
    }).compile();

    service = module.get<BoardsTetrisService>(BoardsTetrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
