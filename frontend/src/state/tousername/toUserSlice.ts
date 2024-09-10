import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface toUsernameSlice {
  username: string;
  status: boolean;
  message: string;
}

const initialState: toUsernameSlice = {
  username: "",
  status: false,
  message: "",
};

const toUserSlice = createSlice({
  name: "toUsername",
  initialState: initialState,
  reducers: {
    setToUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const { setToUsername, setMessage } = toUserSlice.actions;
export default toUserSlice.reducer;
