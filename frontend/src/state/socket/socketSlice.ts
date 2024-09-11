import { createSlice } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { URL } from "../../utils/constants";

// TODO: SocketSlice giving error in console that it is non-serializable

interface socketSlice {
  socket: Socket | null;
}

const initialState: socketSlice = (() => {
  const socket = io(`${URL}`);
  socket.on("connect", () => {
    console.log("connected");
  });
  socket.on("receive-message", (username, message) => {
    console.log({ username, message });
  });
  return {
    socket,
  };
})();

const socketSlice = createSlice({
  name: "socket",
  initialState: initialState,
  reducers: {},
});

export default socketSlice.reducer;
