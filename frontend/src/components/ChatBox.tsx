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
        ?.message.map((chat) => {
          const currDate = new Date(chat.at);
          return (
            <div
              key={chat.id}
              className={`flex ${
                chat.fromUser.username === username
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div className="flex flex-col max-w-[60%] border m-2 rounded-lg">
                <div
                  className={`px-5 pt-5 pb-4 rounded-t-lg ${
                    chat.fromUser.username === username
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {chat.message}
                </div>
                <div
                  className={`text-xs justify-between flex rounded-b-lg bg-black text-white`}
                >
                  <p className="px-1">
                    {currDate.getDate()}-
                    {currDate.toLocaleString("en-US", { month: "long" })}-
                    {currDate.getFullYear()}
                  </p>
                  <p className="px-1">
                    {currDate.getHours()}:{currDate.getMinutes()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ChatBox;
