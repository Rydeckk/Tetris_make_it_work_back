import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const { password, ...rest } = data;
    const hashedPassword = await hash(password, 10);

    return this.usersService.registerUser({
      ...rest,
      password: hashedPassword,
    });
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findUser({
      email,
    });

    const isPasswordValid = await compare(password, user?.password);

    if (!user || !isPasswordValid) {
      throw new UnauthorizedException();
    }

    const { id, name, email: foundUserEmail } = user;

    const payload = { sub: id, name, email: foundUserEmail };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
