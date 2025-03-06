import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StepBoardTetrisService } from './step-board-tetris.service';
import { CreateStepBoardTetriDto } from './dto/create-step-board-tetri.dto';
import { UpdateStepBoardTetriDto } from './dto/update-step-board-tetri.dto';
import { FindAllByBoardDto } from './dto/find-all-by-board.dto';

@Controller('step-board')
export class StepBoardTetrisController {
  constructor(
    private readonly stepBoardTetrisService: StepBoardTetrisService,
  ) {}

  @Post()
  create(@Body() createStepBoardTetriDto: CreateStepBoardTetriDto) {
    return this.stepBoardTetrisService.create(createStepBoardTetriDto);
  }

  @Get()
  findAll(@Body() findAllByBoardDto: FindAllByBoardDto) {
    return this.stepBoardTetrisService.findAll(findAllByBoardDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStepBoardTetriDto: UpdateStepBoardTetriDto,
  ) {
    return this.stepBoardTetrisService.update(id, updateStepBoardTetriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stepBoardTetrisService.remove(id);
  }
}
