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
    origin: ["http://localhost:5173", "https://chat-app-psi-neon.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

app.get("/", (req, res) => {
  res.json({ message: "Success" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://chat-app-psi-neon.vercel.app"],
    credentials: true,
  },
});

const socketMapping = new Map();

io.on("connection", (socket) => {
  console.log({ socketId: socket.id });
  socket.on("send-message", (fromUsername, toUsername, message, at) => {
    console.log({ fromUsername, toUsername, message, at });
    io.to(socketMapping.get(toUsername)).emit(
      "receive-message",
      fromUsername,
      toUsername,
      message,
      at
    );
    io.to(socketMapping.get(fromUsername)).emit(
      "receive-message",
      fromUsername,
      toUsername,
      message,
      at
    );
  });

  socket.on("set-username", (username) => {
    socketMapping.set(username, socket.id);
  });

  socket.on("remove-username", (username) => {
    socketMapping.delete(username);
  });

  socket.on("get-is-active", (username) => {
    let flag = false;
    if (socketMapping.has(username)) {
      flag = true;
    }
    socket.to(socket.id).emit("is-active", flag);
  });
});

async function keepServerUp() {
  try {
    const res = await fetch("https://chat-app-l261.onrender.com/");
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error keeping server alive:", error);
  }
}

setInterval(keepServerUp, 5 * 60 * 1000);
