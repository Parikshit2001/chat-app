import { SendHorizonal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setMessage } from "../state/tousername/toUserSlice";
import axios from "axios";
import { URL } from "../utils/constants";
import { useState } from "react";

function Send() {
  const username = useSelector((state: RootState) => state.username.username);
  const toUser = useSelector((state: RootState) => state.toUser);
  const socket = useSelector((state: RootState) => state.socket.socket);
  const chats = useSelector((state: RootState) => state.chat);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    if (loading) return;
    if (!username || !toUser.username || !toUser.message) return;
    if (
      chats.find((element) => element.username === toUser.username) ===
      undefined
    ) {
      return;
    }
    const date = new Date();
    setLoading(true);
    axios
      .post(
        `${URL}/api/chat/send`,
        {
          to: toUser.username,
          message: toUser.message,
          at: date.toISOString(),
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        socket?.emit(
          "send-message",
          username,
          toUser.username,
          toUser.message,
          date.toISOString()
        );
        dispatch(setMessage(""));
      })
      .catch((err) => {
        console.error(err);
        alert("Unable to send the message");
        throw new Error("Unable to send the message");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex bg-gray-100 w-full mx-12 py-2 rounded-lg space-x-4 px-2 items-center">
      <div className="w-full">
        <input
          className="w-full bg-gray-100 outline-none px-2 text-xl py-2 placeholder:text-gray-400 placeholder:text-lg"
          type="text"
          placeholder="Type your message here"
          value={toUser.message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
          autoFocus
          disabled={loading}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
      </div>
      {/* <button className="text-orange-600">
        <Paperclip />
      </button> */}
      <button
        className="text-orange-600 px-2 py-2 rounded-lg"
        onClick={handleSendMessage}
      >
        <SendHorizonal />
      </button>
    </div>
  );
}

export default Send;
