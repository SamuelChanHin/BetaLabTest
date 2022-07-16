import { Friend } from './../model/friend.model';
import { FriendService } from './../service/friend.service';
import { UserService } from './../service/user.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/model/user.model';
import { hashCode } from 'src/util/hash';
import { FriendStatus } from 'src/model/friend.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { profileImageStore } from 'src/config/fileUploadStore';
import { Public } from 'src/auth/constant';

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
  async getUserById(
    @Req() req,
    @Param('user_id', ParseIntPipe) user_id: number,
  ): Promise<User & { friend: Friend }> {
    const id = req.user.id; // login user
    const user = await this.userService.findOne(user_id); // viewing user
    const friend = await this.friendService.checkFriendshipDuplication(
      id,
      user_id,
    );

    console.log(friend);
    return {
      ...user,
      friend,
    };
  }

  @Get('/:user_id/friend') // Todo: Add pagination
  async getAllFriends(@Param('user_id', ParseIntPipe) user_id: number) {
    const friends = await this.friendService.findAllByUser(user_id);
    return friends;
  }

  @Public()
  @Post('/')
  @UseInterceptors(FileInterceptor('image', profileImageStore))
  async createUser(
    @Body() userData: Partial<User>,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { password } = userData;
    const hashedPassword = await hashCode(password);

    const user = await this.userService.create({
      ...userData,
      password: hashedPassword,
      profileImage: file,
      isVerified: true, // ! now dont have email verification feature so just assume all are real user
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
