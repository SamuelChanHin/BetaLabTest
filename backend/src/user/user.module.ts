import { Friend } from './../model/friend.model';
import { UserService } from '../service/user.service';
import { UserController } from './user.controller';
import { User } from './../model/user.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FriendService } from 'src/service/friend.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Friend])],
  controllers: [UserController],
  providers: [UserService, FriendService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
