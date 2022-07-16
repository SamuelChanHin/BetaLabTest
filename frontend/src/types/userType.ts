export interface User {
  id: number;
  email: string;
  name: string | null;
  phone: string | null;
  address: string | null;
  companyName: string | null;
  profileImage: string | null;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Friend {}
