import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainingList } from './../../models/TrainingList';
import { TRAINING_LISTS_SLICE_NAME } from '../../utils/constants/slicesName';

interface TrainingListsState {
  trainingList: TrainingList[];
  searchQuery: string;
}

const initialState: TrainingListsState = {
  trainingList: [],
  searchQuery: ''
};

export const TrainingListsInitialState: TrainingList = {
  id: '',
  title: '',
  description: '',
  image: '',
  exercises: [],
  isReserved: false,
  total_calories: 0,
  difficulty: '',
  createdAt: ''
};

const TrainingListsSlice = createSlice({
  name: TRAINING_LISTS_SLICE_NAME,
  initialState,
  reducers: {
    newList(state, action: PayloadAction<TrainingList[]>) {
      state.trainingList = action.payload;
    },
    addList(state, action: PayloadAction<any>) {
      state.trainingList.unshift(action.payload);
    },
    addExerciseToList: (
      state,
      action: PayloadAction<{ exercise: any; listId: string }>
    ) => {
      if (action.payload.exercise) {
        const existingList = state.trainingList.find(
          (list) => list.id == action.payload.listId
        );
        if (existingList) {
          existingList.total_calories += parseInt(
            action.payload.exercise.calories
          );
          existingList.exercises.push(action.payload.exercise);
        }
      }
    },
    removeExerciseFromList: (
      state,
      action: PayloadAction<{ listId: string; idExercise: string }>
    ) => {
      const { listId, idExercise } = action.payload;
      const existingList = state.trainingList.find(
        (list) => list.id === listId
      );
      if (existingList) {
        existingList.exercises = existingList.exercises.filter(
          (exercise) => exercise.id !== idExercise
        );
      }
    }
  }
});

export const { newList, addList, addExerciseToList, removeExerciseFromList } =
  TrainingListsSlice.actions;
export default TrainingListsSlice.reducer;
