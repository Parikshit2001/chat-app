import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./username/usernameSlice";
import toUserReducer from "./tousername/toUserSlice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    toUser: toUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
