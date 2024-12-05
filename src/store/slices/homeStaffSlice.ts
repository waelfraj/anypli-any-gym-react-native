import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeStaff } from '../../models/HomeStaff';
import { rolesName } from '../../enums/roles';

const initialState: HomeStaff = {
  nbrCoaches: 0,
  nbrMembers: 0,
  nbrStaffs: 0
};

const homeStaffsSlice = createSlice({
  name: 'homeStaffs',
  initialState,
  reducers: {
    homeStaffsInitialState: (
      state,
      action: PayloadAction<{
        nbrCoaches: number;
        nbrMembers: number;
        nbrStaffs: number;
      }>
    ) => {
      state.nbrCoaches = action.payload.nbrCoaches;
      state.nbrMembers = action.payload.nbrMembers;
      state.nbrStaffs = action.payload.nbrStaffs;
    },

    incrementNbrUser: (state, action: PayloadAction<rolesName>) => {
      switch (action.payload) {
        case rolesName.MEMBERS:
          state.nbrMembers++;
          break;
        case rolesName.COACHES:
          state.nbrCoaches++;
          break;
        case rolesName.STAFFS:
          state.nbrStaffs++;
          break;
        default:
          break;
      }
    },
    decrementNbrUser: (
      state,
      action: PayloadAction<'members' | 'coaches' | 'staffs'>
    ) => {
      switch (action.payload) {
        case rolesName.MEMBERS:
          state.nbrMembers--;
          break;
        case rolesName.COACHES:
          state.nbrCoaches--;
          break;
        case rolesName.STAFFS:
          state.nbrStaffs--;
          break;
        default:
          break;
      }
    }
  }
});

export const { homeStaffsInitialState, incrementNbrUser, decrementNbrUser } =
  homeStaffsSlice.actions;
export default homeStaffsSlice.reducer;
