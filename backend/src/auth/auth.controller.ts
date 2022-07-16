import { UserService } from './../service/user.service';
import {
  Controller,
  Post,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constant';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { User } from 'src/model/user.model';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Req() req): Promise<User & { access_token: string }> {
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
  async validateJwtToken(@Req() req): Promise<User & { access_token: string }> {
    const email = req.email;

    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('User Is Not Found');
    }

    const payload = {
      email: req.user.email,
      sub: req.user.id,
    };

    const { access_token } = this.authService.login(payload);

    delete user.password;

    return {
      ...user,
      access_token,
    };
  }
}
