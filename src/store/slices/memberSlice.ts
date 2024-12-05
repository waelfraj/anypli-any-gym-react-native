import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Member } from '../../models/Member';

interface MembersState {
  members: Member[];
  totalPages?: number;
}

const initialState: MembersState = {
  members: [],
  totalPages: 1
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<MembersState | undefined>) => {
      if (action.payload) {
        state.totalPages = action.payload.totalPages;
        action.payload.members.map((item) => {
          const existingStaff = state.members.find(
            (member) => member.id === item.id
          );
          if (!existingStaff) {
            state.members.push(item);
          }
        });
      } else state.members = [];
    },
    removeMember: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.members.findIndex(
        (member) => member.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.members.splice(indexToRemove, 1);
      }
    },
    updateMember: (state, action: PayloadAction<Member>) => {
      const { id } = action.payload;
      const indexToUpdate = state.members.findIndex(
        (member) => member.id === id
      );
      if (indexToUpdate !== -1) {
        state.members[indexToUpdate] = action.payload;
      }
    },
    validateMember: (
      state,
      action: PayloadAction<{ id: string; verified: boolean }>
    ) => {
      const { id, verified } = action.payload;
      const memberToUpdate = state.members.find((member) => member.id === id);
      if (memberToUpdate && memberToUpdate.user) {
        memberToUpdate.user.verified = verified;
      }
    },
    resetMemberSlice: (state) => {
      state = initialState;
    }
  }
});

export const {
  addMember,
  removeMember,
  updateMember,
  validateMember,
  resetMemberSlice
} = membersSlice.actions;
export default membersSlice.reducer;
