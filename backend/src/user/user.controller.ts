import { FriendService } from './../service/friend.service';
import { UserService } from './../service/user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { User } from 'src/model/user.model';
import { hashCode } from 'src/util/hash';
import { FriendStatus } from 'src/model/friend.model';

@Controller('/user')
export class UserController {
  constructor(
    private userService: UserService,
    private friendService: FriendService,
  ) {}

  @Get('/') // Todo: Add pagination
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }

  @Get('/:user_id')
  async getUserById(@Param('user_id', ParseIntPipe) user_id: number) {
    const users = await this.userService.findOne(user_id);
    return users;
  }

  @Get('/:user_id/friend') // Todo: Add pagination
  async getAllFriends(@Param('user_id', ParseIntPipe) user_id: number) {
    const friends = await this.friendService.findAllByUser(user_id);
    return friends;
  }

  @Post('/')
  async createUser(@Body() userData: Partial<User>) {
    const { password } = userData;
    const hashedPassword = await hashCode(password);

    const user = await this.userService.create({
      ...userData,
      password: hashedPassword,
    });
    return user;
  }

  @Post('/:user_id/friend')
  async addFriend(
    @Param('user_id', ParseIntPipe) user_id: number,
    @Body() data,
  ) {
    const { responderUserId } = data;
    const friend = await this.friendService.create(user_id, responderUserId, {
      status: FriendStatus.ACCEPTED, // ! current logic don't have accept reject feature. let's assume status must be accepted
    });
    return friend;
  }
}
