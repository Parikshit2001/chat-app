import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsernameSlice {
  username: string | undefined;
}

const initialState: UsernameSlice = {
  username: undefined,
};

const usernameSlice = createSlice({
  name: "username",
  initialState: initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUserName } = usernameSlice.actions;
export default usernameSlice.reducer;
