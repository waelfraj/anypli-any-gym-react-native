import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FORGET_PASSWORD_SLICE_NAME } from '../../utils/constants/slicesName';

interface ForgetPassword {
  email: string;
  otp: string;
}
const ForgetPasswordInitialState = {
  email: '',
  otp: ''
};

const ForgetPasswordSlice = createSlice({
  name: FORGET_PASSWORD_SLICE_NAME,
  initialState: ForgetPasswordInitialState,
  reducers: {
    forgetPasswordEmail(state, action: PayloadAction<ForgetPassword>) {
      state.email = action.payload.email;
    },
    forgetPasswordOTP(state, action: PayloadAction<ForgetPassword>) {
      state.otp = action.payload.otp;
    },
    forgetPasswordReset(state) {
      state.email = '';
      state.otp = '';
    }
  }
});

export const { forgetPasswordEmail, forgetPasswordOTP, forgetPasswordReset } =
  ForgetPasswordSlice.actions;
export default ForgetPasswordSlice.reducer;
