// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/store/authSlice';
import tutorReducer from '@/services/tutorSlice'
import { apiService } from '@/services/authService';
import { tutorApi } from '@/services/tutorService';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tutor: tutorReducer,
    [apiService.reducerPath]: apiService.reducer,
    [tutorApi.reducerPath]: tutorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiService.middleware)
      .concat(tutorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;