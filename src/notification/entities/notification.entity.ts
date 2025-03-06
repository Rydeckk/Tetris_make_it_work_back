import { ApiProperty } from '@nestjs/swagger';
import { Notification } from '@prisma/client';

export class NotificationEntity implements Notification {
  @ApiProperty()
  id: string;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty()
  senderId: string;
  @ApiProperty()
  recipientId: string;
  @ApiProperty()
  taskId: string;
}
