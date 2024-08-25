import { useEffect } from "react";
// import { io, Socket } from "socket.io-client";
import Avatar from "./components/Avatar";
import SearchBox from "./components/SearchBox";
import ChatStatus from "./components/ChatStatus";
import Send from "./components/Send";

function App() {
  // const [socket, setSocket] = useState<Socket | null>(null);
  // const [username, setUsername] = useState<string>("");
  // const [message, setMessage] = useState("");
  // const [toUser, setToUser] = useState("");

  useEffect(() => {
    // const newSocket = io("http://localhost:3000");
    // setSocket(newSocket);
    // newSocket.on("connect", () => {
    //   // alert(`You connected with id ${newSocket.id}`);
    //   // newSocket?.emit("set-username", "parik");
    // });
    // newSocket.on("receive-message", (message) => {
    //   alert(message);
    // });
  }, []);

  const names = [
    "naina",
    "Ishika",
    "Neha",
    "Priya",
    "Tanya",
    "Harshita",
    "Suresh",
    "Varun",
    "Aditya",
    "Monika",
    "Tarun",
    "Lakshit",
    "Shashwat",
    "John",
    "Marry",
    "Tim",
    "Bill",
    "Elon",
    "Jensen",
    "Steve",
    "Rahul",
    "Priya",
    "Tanya",
    "Harshita",
    "Suresh",
    "Varun",
    "Aditya",
    "Monika",
    "Tarun",
    "Lakshit",
    "Shashwat",
    "John",
    "Marry",
    "Tim",
    "Bill",
    "Elon",
    "Jensen",
    "Steve",
    "Rahul",
  ];

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 border-r grid grid-rows-12">
        <div className="border-b shadow-sm col-span-1">
          <SearchBox />
        </div>
        <div className="row-span-11 flex flex-col">
          <div>
            <ChatStatus />
          </div>
          <div className="overflow-y-scroll no-scrollbar max-h-[85vh]">
            <ul className="">
              {names.map((name) => {
                return (
                  <li
                    key={name}
                    className="py-2 px-4 flex items-center space-x-2 border-b cursor-pointer hover:bg-gray-50 focus:bg-gray-100"
                  >
                    <div>
                      <Avatar src="" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center space-x-2">
                        <div>
                          <p className="font-semibold text-sm">{name}</p>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                        <div>
                          <p className="text-gray-400 text-sm">11 days</p>
                        </div>
                      </div>
                      <div>
                        <p>
                          {" "}
                          <span className="text-gray-500">{name}</span>: Hello Whats the plan today?
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-8 flex-col grid grid-rows-12">
        <div className="flex bg-gray-100 py-3 border-b px-4 space-x-2 items-center row-span-1">
          <div>
            <Avatar src="" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex space-x-1 items-center">
              <p className="font-bold">Kristine</p>
              <div
                className="bg-green-500 w-2 h-2 rounded-full"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Typing...</p>
            </div>
          </div>
        </div>

        <div className="row-span-11 grid grid-rows-9">
          <div className="row-span-8"></div>
          <div className="row-span-1 border-t flex items-center">
            <Send />
          </div>
        </div>
      </div>
    </div>
    // <div className="min-h-screen bg-gray-700 text-white flex flex-col items-center space-y-2">
    //   <input
    //     className="bg-black"
    //     type="text"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //     placeholder="message"
    //   />
    //   <input
    //     className="bg-black"
    //     type="text"
    //     value={toUser}
    //     onChange={(e) => setToUser(e.target.value)}
    //     placeholder="user"
    //   />
    //   <button
    //     onClick={() => {
    //       socket?.emit("send-message", message, toUser);
    //       setMessage("");
    //     }}
    //   >
    //     Send Message
    //   </button>
    //   <input
    //     className="bg-black"
    //     type="text"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //     placeholder="username"
    //   />
    //   <button
    //     className="bg-red-700"
    //     onClick={() => {
    //       socket?.emit("set-username", username);
    //       setUsername("");
    //     }}
    //   >
    //     Set username
    //   </button>
    // </div>
  );
}

export default App;
