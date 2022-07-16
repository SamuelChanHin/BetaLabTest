import { Friend } from './../model/friend.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.model';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendsRepository: Repository<Friend>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAllByUser(
    userId: number,
    findOptions?: FindManyOptions<Friend>,
  ): Promise<Friend[]> {
    return await this.friendsRepository.find({
      where: [{ requesterUserId: userId }, { responderUserId: userId }],
      relations: {
        requesterUser: true,
        responderUser: true,
      },
      ...findOptions,
    });
  }

  async create(
    requesterUserId: number,
    responderUserId: number,
    data?: Partial<Friend>,
  ): Promise<Friend> {
    const isDuplicated = await this.checkFriendshipDuplication(
      requesterUserId,
      responderUserId,
    );

    if (isDuplicated) {
      throw new BadRequestException('FRIENDSHIP IS ALREADY EXIST');
    }

    const friend = this.friendsRepository.create({
      requesterUserId,
      responderUserId,
      ...data,
    });

    return await this.friendsRepository.save<Partial<Friend>>(friend);
  }

  async checkFriendshipDuplication(
    first_user_id: number,
    second_user_id: number,
  ): Promise<Friend> {
    return await this.friendsRepository.findOne({
      where: [
        { requesterUserId: first_user_id, responderUserId: second_user_id },
        { requesterUserId: second_user_id, responderUserId: first_user_id },
      ],
    });
  }
}
