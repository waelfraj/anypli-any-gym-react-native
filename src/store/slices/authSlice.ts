import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from '../../models/Auth';
import { User } from '../../models/User';
import { AUTH_SLICE_NAME } from '../../utils/constants/slicesName';

export const UserInitialState: User = {
  id: '',
  username: '',
  phone: '0',
  address: '',
  email: '',
  gender: '',
  email_valid: false,
  verified: false
};

const AuthInitialState: Auth = {
  user: UserInitialState,
  isConnected: false
};

const AuthSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState: AuthInitialState,
  reducers: {
    login(state, action: PayloadAction<Auth>) {
      state.user = action.payload.user;
      state.isConnected = action.payload.isConnected;
    },
    logout(state) {
      state.isConnected = AuthInitialState.isConnected;
      state.user = AuthInitialState.user;
    },
    mailValidation(state) {
      state.user.email_valid = true;
    },
    editAuthUser(
      state,
      action: PayloadAction<{
        username?: string;
        phone?: string;
        address?: string;
        email?: string;
      }>
    ) {
      if (action.payload.username) {
        state.user.username = action.payload.username;
      }
      if (action.payload.phone) {
        state.user.phone = action.payload.phone;
      }
      if (action.payload.address) {
        state.user.address = action.payload.address;
      }
      if (action.payload.email) {
        state.user.email = action.payload.email;
      }
    }
  }
});

export const { login, logout, mailValidation, editAuthUser } =
  AuthSlice.actions;
export default AuthSlice.reducer;
