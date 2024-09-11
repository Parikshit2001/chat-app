import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import { RootState } from "../state/store";

function StatusBar() {
  const toUser = useSelector((state: RootState) => state.toUser);

  return (
    <div className="flex bg-gray-100 py-3 border-b px-4 space-x-2 items-center h-full">
      <div className="relative w-10 h-10">
        <Avatar src="https://picsum.photos/200" />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col justify-between">
          <div className="flex space-x-1 items-center">
            <p className="font-bold">{toUser.username}</p>
            {toUser.status && (
              <div className="bg-green-500 w-2 h-2 rounded-full" />
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Typing...</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => {}}>Logout</button>
      </div>
    </div>
  );
}

export default StatusBar;
