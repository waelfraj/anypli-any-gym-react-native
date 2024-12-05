// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Popup } from '../../models/Popup';
import { POPUP_SLICE_NAME } from '../../utils/constants/slicesName';

const initialState: Popup = {
  isVisible: false,
  title: '',
  type: '',
  message: '',
  cancelText: '',
  cancelCallback: () => {},
  confirmCallback: () => {},
  confirmText: null
};

const PopupSlice = createSlice({
  name: POPUP_SLICE_NAME,
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<Popup>) {
      state.isVisible = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.cancelText = action.payload.cancelText;
      state.cancelCallback = action.payload.cancelCallback;
      state.confirmCallback = action.payload.confirmCallback;
      state.confirmText = action.payload.confirmText;
      state.type = action.payload.type;
    },
    closePopup(state) {
      state.isVisible = false;
    },
    resetPopup(state) {
      state = initialState;
    }
  }
});

export const { openPopup, closePopup, resetPopup } = PopupSlice.actions;
export default PopupSlice.reducer;
