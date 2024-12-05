export interface HomeStaff {
  nbrMembers: number;
  nbrCoaches: number;
  nbrStaffs: number;
}

export interface HomeStaffResponse {
  nbrMembers: number;
  nbrCoaches: number;
  nbrStaffs: number;
}

export function decodeCoachResponse(homeStaff: HomeStaffResponse): HomeStaff {
  return {
    nbrMembers: homeStaff.nbrMembers,
    nbrCoaches: homeStaff.nbrCoaches,
    nbrStaffs: homeStaff.nbrStaffs
  };
}
