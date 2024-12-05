import { configureStore } from '@reduxjs/toolkit';
import { AuthApi } from './api/authApi';

import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from '../utils/constants/persistConfig';
import { AppointmentApi } from './api/appointmentApi';
import { ChatBotApi } from './api/chatBotApi';
import { CoachApi } from './api/coachApi';
import { CreateAdvetisementApi } from './api/createAdvertisementApi';
import { ExercisesApi } from './api/exerciseApi';
import { MemberApi } from './api/memberApi';
import { StaffApi } from './api/staffApi';
import { TrainingListsApi } from './api/trainingListsApi';
import { WeightApi } from './api/weightApi';
import { rootReducer } from './rootReducer';

const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([
      AuthApi.middleware,
      StaffApi.middleware,
      CoachApi.middleware,
      MemberApi.middleware,
      CreateAdvetisementApi.middleware,
      TrainingListsApi.middleware,
      ExercisesApi.middleware,
      WeightApi.middleware,
      ChatBotApi.middleware,
      AppointmentApi.middleware
    ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
