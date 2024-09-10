import "dotenv/config";
import userRouter from "./routes/User";
import chatRouter from "./routes/Chat";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://chat-app-psi-neon.vercel.app/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://chat-app-psi-neon.vercel.app/"],
    credentials: true,
  },
});

const socketMapping = new Map();

io.on("connection", (socket) => {
  console.log({ socketId: socket.id });
  socket.on("send-message", (message, username) => {
    socket.to(socketMapping.get(username)).emit("receive-message", message);
  });
  
  socket.on("set-username", (username) => {
    socketMapping.set(username, socket.id);
  });

  socket.on("remove-username", (username) => {
    socketMapping.delete(username);
  });
});
