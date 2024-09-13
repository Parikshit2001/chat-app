import { SendHorizonal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { setMessage } from "../state/tousername/toUserSlice";

function Send() {
  const username = useSelector((state: RootState) => state.username.username);
  const toUser = useSelector((state: RootState) => state.toUser);
  const socket = useSelector((state: RootState) => state.socket.socket);
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    const date = new Date();
    socket?.emit(
      "send-message",
      username,
      toUser.username,
      toUser.message,
      date.toISOString()
    );
    dispatch(setMessage(""));
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
        />
      </div>
      {/* <button className="text-orange-600">
        <Paperclip />
      </button> */}
      <button
        className="bg-orange-200 text-orange-600 px-2 py-2 rounded-lg"
        onClick={handleSendMessage}
      >
        <SendHorizonal />
      </button>
    </div>
  );
}

export default Send;
