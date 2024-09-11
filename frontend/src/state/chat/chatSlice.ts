import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chatSlice {
  username: string;
  message: [
    {
      from: string;
      to: string;
      message: string;
    }
  ];
}

const initialState: chatSlice[] = [];

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setChat: (state, action: PayloadAction<chatSlice>) => {
      state = [...state, action.payload];
    },
  },
});

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;
