import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface messageSlice {
  id: string;
  fromUser: { username: string };
  toUser: { username: string };
  at: string;
  message: string;
}
interface chatSlice {
  username: string;
  message: messageSlice[];
}

const initialState: chatSlice[] = [];

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setChat: (
      state,
      action: PayloadAction<{ chats: messageSlice[]; username: string }>
    ) => {
      state.push({
        username: action.payload.username,
        message: action.payload.chats,
      });
    },
  },
});

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;
