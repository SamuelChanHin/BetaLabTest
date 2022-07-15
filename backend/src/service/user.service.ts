import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.model';
import { Repository, FindManyOptions } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return await this.usersRepository.save<Partial<User>>(user);
  }

  async findAll(findOptions?: FindManyOptions<User>): Promise<User[]> {
    return await this.usersRepository.find(findOptions);
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await await this.usersRepository.delete(id);
  }
}
