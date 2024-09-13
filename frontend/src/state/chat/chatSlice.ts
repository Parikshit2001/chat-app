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
    receiveMessage: (
      state: chatSlice[],
      action: PayloadAction<{
        fromUsername: string;
        toUsername: string;
        message: string;
        at: string;
      }>
    ) => {
      const { fromUsername, toUsername, message, at } = action.payload;
      const updatedState = state.map((chat) => {
        if (chat.username === fromUsername || chat.username === toUsername) {
          return {
            ...chat,
            message: [
              {
                id: `${at}`,
                fromUser: { username: fromUsername },
                toUser: { username: toUsername },
                at,
                message,
              },
              ...chat.message,
            ],
          };
        }
        return chat;
      }) as chatSlice[];
      return updatedState;
    },
  },
});

export const { setChat, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
