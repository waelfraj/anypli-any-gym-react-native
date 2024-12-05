import { combineReducers } from '@reduxjs/toolkit';
import { AppointmentApi } from './api/appointmentApi';
import { AuthApi } from './api/authApi';
import { ChatBotApi } from './api/chatBotApi';
import { CoachApi } from './api/coachApi';
import { CompleteProfileApi } from './api/completeProfileApi';
import { CreateAdvetisementApi } from './api/createAdvertisementApi';
import { ExercisesApi } from './api/exerciseApi';
import { MemberApi } from './api/memberApi';
import { StaffApi } from './api/staffApi';
import { TrainingListsApi } from './api/trainingListsApi';
import { WeightApi } from './api/weightApi';
import AuthSliceReducer from './slices/authSlice';
import coachesSliceReducer from './slices/coachSlice';
import ExercisesSliceReducer from './slices/exercisesSlice';
import forgetPasswordSliceReducer from './slices/forgetPasswordSlice';
import homeStaffsSliceReducer from './slices/homeStaffSlice';
import memberSliceReducer from './slices/memberSlice';
import popupSliceReducer from './slices/popupSlice';
import staffSliceReducer from './slices/staffSlice';
import ListExercisesSliceReducer from './slices/trainingListSlice';
import WeightSliceReducer from './slices/weightSlice';

export const rootReducer = combineReducers({
  auth: AuthSliceReducer,
  popup: popupSliceReducer,
  forgePassword: forgetPasswordSliceReducer,
  member: memberSliceReducer,
  coach: coachesSliceReducer,
  staff: staffSliceReducer,
  staffHome: homeStaffsSliceReducer,
  listExercises: ListExercisesSliceReducer,
  exercises: ExercisesSliceReducer,
  weight: WeightSliceReducer,

  [AuthApi.reducerPath]: AuthApi.reducer,
  [MemberApi.reducerPath]: MemberApi.reducer,
  [StaffApi.reducerPath]: StaffApi.reducer,
  [CoachApi.reducerPath]: CoachApi.reducer,
  [TrainingListsApi.reducerPath]: TrainingListsApi.reducer,
  [ExercisesApi.reducerPath]: ExercisesApi.reducer,
  [CreateAdvetisementApi.reducerPath]: CreateAdvetisementApi.reducer,
  [WeightApi.reducerPath]: WeightApi.reducer,
  [CompleteProfileApi.reducerPath]: CompleteProfileApi.reducer,
  [ChatBotApi.reducerPath]: ChatBotApi.reducer,
  [AppointmentApi.reducerPath]: AppointmentApi.reducer
});
