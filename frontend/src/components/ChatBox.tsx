import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useEffect } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import { setChat } from "../state/chat/chatSlice";

function ChatBox() {
  const chats = useSelector((state: RootState) => state.chat);
  const toUser = useSelector((state: RootState) => state.toUser);
  const username = useSelector((state: RootState) => state.username.username);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      toUser.username &&
      chats.find((element) => element.username === toUser.username) ===
        undefined
    ) {
      axios
        .post(
          `${URL}/api/chat/getmessages`,
          { withUsername: toUser.username },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          dispatch(
            setChat({ chats: res.data.chats, username: toUser.username })
          );
        });
    }
  }, []);

  return (
    <div className="h-full flex flex-col-reverse overflow-y-scroll no-scrollbar max-h-[80vh]">
      {chats
        .find((element) => element.username === toUser.username)
        ?.message.map((chat) => (
          <div
            key={chat.id}
            className={`flex ${
              chat.fromUser.username === username
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[60%] border p-5 m-2 rounded-lg ${
                chat.fromUser.username === username
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {chat.message}
            </div>
          </div>
        ))}
    </div>
  );
}

export default ChatBox;
