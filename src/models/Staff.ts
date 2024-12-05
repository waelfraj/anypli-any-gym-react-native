import { User, UserResponse, decodeUserResponse } from './User';

export interface Staff {
  user: User;
  createdAt?: string;
  id?: string;
}

export interface StaffResponse {
  data(data: any): Staff | Promise<Staff>;
  user: UserResponse;
  id?: string;
  created_at?: string;
}

export function decodeStaffResponse(staffResponse: StaffResponse): Staff {
  const staff = {
    user: decodeUserResponse(staffResponse.user),
    id: staffResponse.id,
    createdAt: staffResponse.created_at
  };
  return staff;
}

export interface CreateStaffRequest {
  username: string;
  email: string;
  phone?: string;
  password: string;
  address?: string;
}
export interface EditProfilRequest {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  address?: string;
}
