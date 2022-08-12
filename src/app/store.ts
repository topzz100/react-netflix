import { configureStore, ThunkAction, Action, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     movie: movieReducer
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
const rootReducer = combineReducers({
    movie: movieReducer,
  })
  export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
