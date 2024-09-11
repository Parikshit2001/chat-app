import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./username/usernameSlice";
import toUserReducer from "./tousername/toUserSlice";
import chatReducer from "./chat/chatSlice";
import sockerReducer from "./socket/socketSlice";

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    toUser: toUserReducer,
    chat: chatReducer,
    socket: sockerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
