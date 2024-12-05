import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weight } from '../../models/Weight';
import { WEIGHT_SLICE_NAME } from '../../utils/constants/slicesName';

interface WeightState {
  weight: Weight[];
}

const initialState: WeightState = {
  weight: []
};

const WeightSlice = createSlice({
  name: WEIGHT_SLICE_NAME,
  initialState,
  reducers: {
    newWeightList(state, action: PayloadAction<Weight[]>) {
      state.weight = [];
      action.payload.forEach((element) => {
        state.weight.push(element);
      });
    },
    addWeight(state, action: PayloadAction<Weight | undefined>) {
      if (action.payload) state.weight.push(action.payload);
    },
    deleteWeight(state, action: PayloadAction<{ id: string }>) {
      state.weight = state.weight.filter(
        (weight) => weight.id !== action.payload.id
      );
    }
  }
});

export const { newWeightList, addWeight, deleteWeight } = WeightSlice.actions;
export default WeightSlice.reducer;
