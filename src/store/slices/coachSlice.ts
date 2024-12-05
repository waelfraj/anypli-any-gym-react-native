import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coach } from '../../models/Coach';

interface CoachesState {
  coaches: Coach[];
  totalPages?: number;
  searchQuery?: string;
}

const initialState: CoachesState = {
  coaches: [],
  totalPages: 0,
  searchQuery: ''
};

const coachesSlice = createSlice({
  name: 'coaches',
  initialState,
  reducers: {
    addCoach: (state, action: PayloadAction<CoachesState | undefined>) => {
      if (action.payload) {
        state.totalPages = action.payload.totalPages;
        action.payload.coaches.map((item) => {
          const existingStaff = state.coaches.find(
            (staff) => staff.id === item.id
          );
          if (!existingStaff) {
            state.coaches.push(item);
          }
        });
      } else state.coaches = [];
    },
    removeCoach: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.coaches.findIndex(
        (coach) => coach.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.coaches.splice(indexToRemove, 1);
      }
    },
    updateCoach: (state, action: PayloadAction<Coach>) => {
      const { id } = action.payload;
      const indexToUpdate = state.coaches.findIndex((coach) => coach.id === id);
      if (indexToUpdate !== -1) {
        state.coaches[indexToUpdate] = action.payload;
      }
    },
    validateCoach: (
      state,
      action: PayloadAction<{ id: string; verified: boolean }>
    ) => {
      const { id, verified } = action.payload;
      const coachToUpdate = state.coaches.find((coach) => coach.id === id);
      if (coachToUpdate && coachToUpdate.user) {
        coachToUpdate.user.verified = verified;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    }
  }
});

export const {
  addCoach,
  removeCoach,
  updateCoach,
  validateCoach,
  setSearchQuery
} = coachesSlice.actions;
export default coachesSlice.reducer;
