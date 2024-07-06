import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpInput } from './dto/sign-up-input.dto';
import { LoginInput } from './dto/login-input.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private dbService: DatabaseService,
  ) {}

  async signUp(data: SignUpInput) {
    const userExists = await this.dbService.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const hash = await this.hashData(data.password);

    const newUser = await this.dbService.user.create({
      data: { ...data, password: hash },
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);

    await this.updateRefreshToken(newUser.id, tokens.refreshToken);

    return tokens;
  }

  async login(data: LoginInput) {
    const user = await this.dbService.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new BadRequestException('User does not exists');
    }

    const isPasswordValid = await argon2.verify(user.password, data.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Incorrect Password');
    }

    const tokens = await this.getTokens(user.id, user.email);

    this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(id: string) {
    return await this.dbService.user.update({
      where: { id },
      data: { refreshToken: null },
    });
  }

  async refresh(id: string, refreshToken: string) {
    const user = await this.dbService.user.findUnique({ where: { id } });

    if (!user) throw new UnauthorizedException('ACCESS DENIED');

    const hashedRefreshToken = user.refreshToken;

    const isValidRefreshToken = await argon2.verify(
      hashedRefreshToken,
      refreshToken,
    );

    if (!isValidRefreshToken) {
      throw new UnauthorizedException('ACCESS DENIED');
    }

    const tokens = await this.getTokens(user.id, user.email);

    const newHashedRefreshToken = await this.hashData(tokens.refreshToken);

    await this.dbService.user.update({
      where: { id },
      data: { refreshToken: newHashedRefreshToken },
    });

    return tokens;
  }

  resetPassword(id: number) {
    return `This action returns a #${id} auth`;
  }

  async hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.dbService.user.update({
      where: { id: userId },
      data: { refreshToken: hashedRefreshToken },
    });
  }

  async getTokens(userId: string, email: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: process.env.JWT_ACCESS_SECRET,
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: process.env.JWT_REFRESH_SECRET,
          expiresIn: '365d',
        },
      ),
    ]);

    if (!accessToken || !refreshToken) {
      throw new BadRequestException('Something went wrong!!');
    }
    return { accessToken, refreshToken };
  }
}
