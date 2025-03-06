import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Request,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/user.dto';
import { RequestWithUser } from 'src/@types/request';
import { UserEntity } from './entities/user.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get(':userId')
  @ApiCreatedResponse({ type: UserEntity })
  async findOne(@Param('userId', ParseUUIDPipe) userId: string) {
    const user = await this.usersService.findUser({
      id: userId,
    });
    return new UserEntity(user);
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update({
      ...updateUserDto,
      userId,
    });
    return new UserEntity(user);
  }

  @Delete()
  async deleteCurrentUser(@Request() req: RequestWithUser) {
    const user = await this.usersService.deleteCurrentUser(req.user?.sub);
    return new UserEntity(user);
  }
}
