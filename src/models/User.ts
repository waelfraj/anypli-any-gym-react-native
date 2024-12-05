export interface User {
  id?: string;
  username?: string;
  phone?: string;
  address?: string;
  email?: string;
  gender?: string;
  role?: string;
  email_valid: boolean;
  verified?: boolean;
}

export interface UserResponse {
  id?: string;
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  role_id: string;
  gender?: string;
  email_verified_at: Date | null;
  verified_at?: number;
}

export function decodeUserResponse(userResponse: UserResponse): User {
  return {
    id: userResponse.id,
    username: userResponse.name,
    phone: userResponse.phone,
    address: userResponse.address,
    email: userResponse.email,
    role: userResponse.role_id,
    gender: userResponse.gender,
    email_valid: !!userResponse.email_verified_at,
    verified: userResponse.verified_at != 0
  };
}
