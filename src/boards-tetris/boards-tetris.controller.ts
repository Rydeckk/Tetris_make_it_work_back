import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  ClassSerializerInterceptor,
  UseInterceptors,
  SerializeOptions,
} from '@nestjs/common';
import { BoardsTetrisService } from './boards-tetris.service';
import { CreateBoardsTetriDto } from './dto/create-boards-tetri.dto';
import { UpdateBoardsTetriDto } from './dto/update-boards-tetri.dto';
import { RequestWithUser } from 'src/@types/request';
import { BoardsTetrisEntity } from './entities/boards-tetri.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('boards')
export class BoardsTetrisController {
  constructor(private readonly boardsTetrisService: BoardsTetrisService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: BoardsTetrisEntity })
  @Post()
  @ApiCreatedResponse({ type: BoardsTetrisEntity })
  create(@Body() createBoardsTetriDto: CreateBoardsTetriDto) {
    return this.boardsTetrisService.create(createBoardsTetriDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: BoardsTetrisEntity })
  @Get()
  @ApiCreatedResponse({ type: BoardsTetrisEntity, isArray: true })
  findAll(@Request() req: RequestWithUser) {
    return this.boardsTetrisService.findAll(req.user.sub);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: BoardsTetrisEntity })
  @Get(':id')
  @ApiCreatedResponse({ type: BoardsTetrisEntity })
  findOne(@Param('id') id: string) {
    return this.boardsTetrisService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: BoardsTetrisEntity })
  @Patch(':id')
  @ApiCreatedResponse({ type: BoardsTetrisEntity })
  update(
    @Param('id') id: string,
    @Body() updateBoardsTetriDto: UpdateBoardsTetriDto,
  ) {
    return this.boardsTetrisService.update(id, updateBoardsTetriDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: BoardsTetrisEntity })
  @Delete(':id')
  @ApiCreatedResponse({ type: BoardsTetrisEntity })
  remove(@Param('id') id: string) {
    return this.boardsTetrisService.remove(id);
  }
}
