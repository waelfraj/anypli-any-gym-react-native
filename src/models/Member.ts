import { User, UserResponse, decodeUserResponse } from './User';

export interface Member {
  user: User;
  objective: string;
  height: string;
  target_weight: string;
  physical_activity: string;
  age: string;
  createdAt?: string;
  id?: string;
}

export interface MemberResponse {
  data(data: any): Member | Promise<Member>;
  user: UserResponse;
  objective_id: string;
  height: string;
  target_weight: string;
  physical_activity_level: string;
  age: string;
  id?: string;
  created_at?: string;
}

export function decodeMemberResponse(memberResponse: MemberResponse): Member {
  const member = {
    user: decodeUserResponse(memberResponse.user),
    id: memberResponse.id,
    objective: memberResponse.objective_id,
    height: memberResponse.height,
    age: memberResponse.age,
    target_weight: memberResponse.target_weight,
    physical_activity: memberResponse.physical_activity_level,
    createdAt: memberResponse.created_at
  };
  return member;
}
