import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from './user.model';

export enum FriendStatus {
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  PENDING = 'pending',
}

@Entity()
@Unique('friend_unique_constraint', ['requesterUserId', 'responderUserId']) // named; multiple fields
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'requester_user_id', nullable: false })
  requesterUserId: number;

  @Column({ name: 'responder_user_id', nullable: false })
  responderUserId: number;

  @Column({
    type: 'enum',
    enum: FriendStatus,
    default: FriendStatus.PENDING,
    nullable: false,
  })
  status: FriendStatus;

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

  @ManyToOne(() => User, (user: User) => user.friendRequester)
  @JoinColumn({ name: 'requester_user_id' })
  requesterUser: User;

  @ManyToOne(() => User, (user: User) => user.friendResponder)
  @JoinColumn({ name: 'responder_user_id' })
  responderUser: User;
}
