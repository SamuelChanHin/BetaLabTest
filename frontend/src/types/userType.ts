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
}

export interface Friend {}
