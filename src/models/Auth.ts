import { User, UserResponse } from './User';

export interface Auth {
  user: User;
  isConnected: boolean;
}

export interface LoginResponse {
  user: UserResponse;
  token: string;
  typeToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  gender: string;
  role: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  address?: string;
}
