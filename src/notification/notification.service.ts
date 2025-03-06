import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  create(senderId: string, createNotificationDto: CreateNotificationDto) {
    return this.prisma.notification.create({
      data: {
        senderId: senderId,
        taskId: createNotificationDto.taksId,
        recipientId: createNotificationDto.recipientId,
      },
    });
  }

  findAll() {
    return this.prisma.notification.findMany();
  }

  findAllSend(senderId: string) {
    return this.prisma.notification.findMany({
      where: { senderId: senderId, isActive: true },
      include: { sender: true, recipient: true, task: true },
    });
  }

  findAllReceive(recipientId: string) {
    return this.prisma.notification.findMany({
      where: { recipientId: recipientId, isActive: true },
    });
  }

  findOne(id: string) {
    return this.prisma.notification.findFirst({ where: { id: id } });
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.prisma.notification.update({
      where: { id: id },
      data: updateNotificationDto,
    });
  }

  remove(id: string) {
    return this.prisma.notification.delete({ where: { id: id } });
  }
}
