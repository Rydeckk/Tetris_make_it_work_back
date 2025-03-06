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
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { RequestWithUser } from 'src/@types/request';
import { NotificationEntity } from './entities/notification.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Post()
  @ApiCreatedResponse({ type: NotificationEntity })
  create(
    @Body() createNotificationDto: CreateNotificationDto,
    @Request() req: RequestWithUser,
  ) {
    return this.notificationService.create(req.user.sub, createNotificationDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Get()
  @ApiCreatedResponse({ type: NotificationEntity })
  findAll() {
    return this.notificationService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Get('send/:userId')
  @ApiCreatedResponse({ type: NotificationEntity })
  findAllSend(@Param('userId') senderId: string) {
    return this.notificationService.findAllSend(senderId);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Get('receive/:userId')
  @ApiCreatedResponse({ type: NotificationEntity })
  findAllReceive(@Param('userId') recipientId: string) {
    return this.notificationService.findAllReceive(recipientId);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Get(':id')
  @ApiCreatedResponse({ type: NotificationEntity })
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Patch(':id')
  @ApiCreatedResponse({ type: NotificationEntity })
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: NotificationEntity })
  @Delete(':id')
  @ApiCreatedResponse({ type: NotificationEntity })
  remove(@Param('id') id: string) {
    return this.notificationService.remove(id);
  }
}
