import { Coach, CoachResponse, decodeCoachResponse } from './Coach';
import { Member, MemberResponse, decodeMemberResponse } from './Member';

export interface Appointment {
  id: number;
  startDate: string;
  endDate: string;
  coachId: number;
  title: string;
  category: string;
  numberParticipation: number;
  room: string;
  createdAt: string;
  updatedAt: string;
  members: Member[];
  coach: Coach;
}

export interface AppointmentResponse {
  id: number;
  start_date: string;
  end_date: string;
  coach_id: number;
  title: string;
  category: string;
  number_participation: number;
  room: string;
  created_at: string;
  updated_at: string;
  members: MemberResponse[];
  coach: CoachResponse;
}

export function decodeAppointmentResponse(
  appointmentResponse: AppointmentResponse
): Appointment {
  return {
    id: appointmentResponse.id,
    startDate: appointmentResponse.start_date,
    endDate: appointmentResponse.end_date,
    coachId: appointmentResponse.coach_id,
    title: appointmentResponse.title,
    category: appointmentResponse.category,
    numberParticipation: appointmentResponse.number_participation,
    room: appointmentResponse.room,
    createdAt: appointmentResponse.created_at,
    updatedAt: appointmentResponse.updated_at,
    members: appointmentResponse.members?.map((member) =>
      decodeMemberResponse(member)
    ),
    coach: decodeCoachResponse(appointmentResponse.coach)
  };
}
