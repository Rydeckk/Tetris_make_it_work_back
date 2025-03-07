import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';
import { StepBoardTetrisService } from './step-board-tetris.service';
import { CreateStepBoardTetriDto } from './dto/create-step-board-tetri.dto';
import { UpdateStepBoardTetriDto } from './dto/update-step-board-tetri.dto';
import { FindAllByBoardDto } from './dto/find-all-by-board.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { StepBoardTetrisEntity } from './entities/step-board-tetri.entity';

@Controller('step-board')
export class StepBoardTetrisController {
  constructor(
    private readonly stepBoardTetrisService: StepBoardTetrisService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: StepBoardTetrisEntity })
  @Post()
  @ApiCreatedResponse({ type: StepBoardTetrisEntity })
  create(@Body() createStepBoardTetriDto: CreateStepBoardTetriDto) {
    return this.stepBoardTetrisService.create(createStepBoardTetriDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: StepBoardTetrisEntity })
  @Get()
  @ApiCreatedResponse({ type: StepBoardTetrisEntity })
  findAll(@Body() findAllByBoardDto: FindAllByBoardDto) {
    return this.stepBoardTetrisService.findAll(findAllByBoardDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: StepBoardTetrisEntity })
  @Patch(':id')
  @ApiCreatedResponse({ type: StepBoardTetrisEntity })
  update(
    @Param('id') id: string,
    @Body() updateStepBoardTetriDto: UpdateStepBoardTetriDto,
  ) {
    return this.stepBoardTetrisService.update(id, updateStepBoardTetriDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: StepBoardTetrisEntity })
  @Delete(':id')
  @ApiCreatedResponse({ type: StepBoardTetrisEntity })
  remove(@Param('id') id: string) {
    return this.stepBoardTetrisService.remove(id);
  }
}
