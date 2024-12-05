import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exercise } from '../../models/Exercise';

export const ExercisesInitialState: Exercise = {
  id: '',
  title: '',
  description: '',
  image: '',
  difficulty: 'easy',
  category: 'cardio',
  calories: '',
  sets: '',
  createdAt: ''
};

const ExercisesSlice = createSlice({
  name: 'Exercises',
  initialState: ExercisesInitialState,
  reducers: {
    addExercice(state, action: PayloadAction<Exercise>) {
      if (action.payload) {
        state = action.payload;
      }
    }
  }
});

export const { addExercice } = ExercisesSlice.actions;
export default ExercisesSlice.reducer;
