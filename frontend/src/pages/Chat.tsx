import SearchBox from "../components/SearchBox";
import ChatStatus from "../components/ChatStatus";
import Send from "../components/Send";
import FriendList from "../components/FriendList";
import StatusBar from "../components/StatusBar";
import ChatBox from "../components/ChatBox";

function Chat() {
  return (
    <div className="grid sm:grid-cols-12 h-screen">
      <div className="col-span-4 border-r grid grid-rows-12">
        <div className="border-b shadow-sm row-span-1">
          <SearchBox />
        </div>
        <div className="row-span-11 flex flex-col">
          <div>
            <ChatStatus />
          </div>
          <FriendList />
        </div>
      </div>
      <div className="col-span-8 flex-col grid grid-rows-12">
        <div className="items-center row-span-1">
          <StatusBar />
        </div>
        <div className="row-span-11 grid grid-rows-9">
          <div className="row-span-8">
            <ChatBox />
          </div>
          <div className="row-span-1 border-t flex items-center">
            <Send />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
