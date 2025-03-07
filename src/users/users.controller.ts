import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Request,
  Put,
  ClassSerializerInterceptor,
  UseInterceptors,
  SerializeOptions,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/user.dto';
import { RequestWithUser } from 'src/@types/request';
import { UserEntity } from './entities/user.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { FindAllUserSkillsDto } from './dto/find-all-user-skills.dto';
import { FindAllUserSkillsWeightDto } from './dto/find-all-user-skills-weight.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Get()
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  findAll() {
    return this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Get('skills-weight')
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  findUserSkillsMoreWeight(
    @Body() userSkillWeightDto: FindAllUserSkillsWeightDto,
  ) {
    return this.usersService.findUserSkillsMoreWeight(userSkillWeightDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Get('skills')
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  findUserSkills(@Body() userSkillsDto: FindAllUserSkillsDto) {
    return this.usersService.findUserSkills(userSkillsDto);

  @Get('current-user')
  @ApiCreatedResponse({ type: UserEntity })
  findCurrentUser(@Request() req: RequestWithUser) {
    return this.usersService.findUser({
      id: req.user.sub,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Get(':userId')
  @ApiCreatedResponse({ type: UserEntity })
  findOne(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.usersService.findUser({
      id: userId,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Put(':userId')
  update(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update({
      ...updateUserDto,
      userId,
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserEntity })
  @Delete()
  deleteCurrentUser(@Request() req: RequestWithUser) {
    return this.usersService.deleteCurrentUser(req.user?.sub);
  }
}
