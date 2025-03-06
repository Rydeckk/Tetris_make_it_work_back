import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { BoardsTetrisService } from './boards-tetris.service';
import { CreateBoardsTetriDto } from './dto/create-boards-tetri.dto';
import { UpdateBoardsTetriDto } from './dto/update-boards-tetri.dto';
import { RequestWithUser } from 'src/@types/request';

@Controller('boards')
export class BoardsTetrisController {
  constructor(private readonly boardsTetrisService: BoardsTetrisService) {}

  @Post()
  create(@Body() createBoardsTetriDto: CreateBoardsTetriDto) {
    return this.boardsTetrisService.create(createBoardsTetriDto);
  }

  @Get()
  findAll(@Request() req: RequestWithUser) {
    return this.boardsTetrisService.findAll(req.user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsTetrisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardsTetriDto: UpdateBoardsTetriDto) {
    return this.boardsTetrisService.update(id, updateBoardsTetriDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsTetrisService.remove(id);
  }
}
