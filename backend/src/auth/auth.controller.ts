import { UserService } from './../service/user.service';
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constant';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Req() req) {
    const payload = {
      email: req.user.email,
      sub: req.user.id,
    };

    const { access_token } = this.authService.login(payload);

    // don't pass the password to client sidde
    delete req.user.password;

    return {
      ...req.user,
      access_token,
    };
  }

  @Post('token/validate')
  async validateJwtToken(@Req() req) {
    const email = req.email;

    const user = await this.userService.findOneByEmail(email);
    return user;
  }
}
