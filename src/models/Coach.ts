import { User, UserResponse, decodeUserResponse } from './User';

export interface Coach {
  user: User;
  createdAt?: string;
  id?: string;
}

export interface CoachResponse {
  data(data: any): Coach | Promise<Coach>;
  user: UserResponse;
  id?: string;
  created_at?: string;
}

export function decodeCoachResponse(coachResponse: CoachResponse): Coach {
  const coach = {
    user: decodeUserResponse(coachResponse.user),
    id: coachResponse.id,
    createdAt: coachResponse.created_at
  };
  return coach;
}