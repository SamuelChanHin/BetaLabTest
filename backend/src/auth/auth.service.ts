import { UserService } from './../service/user.service';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { matchCode } from 'src/util/hash';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('USER IS NOT FOUND');
    }

    const passwordIsCorrect = await matchCode(password, user.password);

    if (passwordIsCorrect) {
      return user;
    } else {
      throw new UnauthorizedException('INCORRECT PASSWORD');
    }
  }

  // generate jwt token
  login(payload: any) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
