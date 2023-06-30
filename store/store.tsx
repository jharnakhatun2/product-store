import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../app/slices/useSlice';


export default function makeStore() {
  return configureStore({
    reducer: {
      currency: userReducer,
    }
  })
}
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
