import { Request } from '@nestjs/common';

export interface RequestWithUser extends Request {
  user?: { sub: string; name: string; email: string };
}
