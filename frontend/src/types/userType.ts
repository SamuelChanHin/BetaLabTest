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

export interface User {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  address: string | null;
  companyName: string | null;
  profileImage: Image | null;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  friend?: Friend;
}

export enum FriendStatus {
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  PENDING = "pending",
}

export interface Friend {
  id: number;
  requesterUserId: number;
  responderUserId: number;
  requesterUser: User;
  responderUser: User;
  status: FriendStatus;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
