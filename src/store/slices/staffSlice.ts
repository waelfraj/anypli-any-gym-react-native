import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Staff } from '../../models/Staff';

interface StaffsState {
  staffs: Staff[];
  searchQuery: string;
}

const initialState: StaffsState = {
  staffs: [],
  searchQuery: ''
};

const staffsSlice = createSlice({
  name: 'staffs',
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<Staff[] | undefined>) => {
      state.staffs = [];
      if (action.payload) {
        action.payload.map((item) => {
          const existingStaff = state.staffs.find(
            (staff) => staff.id === item.id
          );
          if (!existingStaff) {
            state.staffs.push(item);
          }
        });
      } else state.staffs = [];
    },
    removeStaff: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.staffs.findIndex(
        (staff) => staff.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.staffs.splice(indexToRemove, 1);
      }
    },
    updateStaff: (state, action: PayloadAction<Staff>) => {
      const { id } = action.payload;
      const indexToUpdate = state.staffs.findIndex((staff) => staff.id === id);
      if (indexToUpdate !== -1) {
        state.staffs[indexToUpdate] = action.payload;
      }
    },
    validateStaff: (
      state,
      action: PayloadAction<{ id: string; verified: boolean }>
    ) => {
      const { id, verified } = action.payload;
      const staffToUpdate = state.staffs.find((staff) => staff.id === id);
      if (staffToUpdate && staffToUpdate.user) {
        staffToUpdate.user.verified = verified;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  }
});

export const {
  addStaff,
  removeStaff,
  updateStaff,
  validateStaff,
  setSearchQuery
} = staffsSlice.actions;
export default staffsSlice.reducer;
