import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Friend } from './friend.model';

interface Image {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ name: 'company_name', nullable: true })
  companyName: string;

  @Column({ type: 'json', name: 'profile_image', nullable: true })
  profileImage: Image;

  @Column({ name: 'is_active', default: true, nullable: false })
  isActive: boolean;

  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(() => Friend, (friend: Friend) => friend.requesterUserId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  friendRequester: Friend[];

  @OneToMany(() => Friend, (friend: Friend) => friend.responderUserId, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  friendResponder: Friend[];
}
