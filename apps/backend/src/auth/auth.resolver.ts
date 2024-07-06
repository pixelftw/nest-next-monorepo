import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignUpInput } from './dto/sign-up-input.dto';
import { LoginInput } from './dto/login-input.dto';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from './common/guards';
import { GetCurrentUser } from './common/decorators';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  signUp(@Args('signUp') signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }

  @Mutation(() => Auth)
  signIn(@Args('singIn') loginInput: LoginInput) {
    return this.authService.login(loginInput);
  }
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => Auth)
  refresh(
    @GetCurrentUser()
    user: {
      sub: string;
      refreshToken: string;
      email: string;
    },
  ) {
    return this.authService.refresh(user.sub, user.refreshToken);
  }
}
