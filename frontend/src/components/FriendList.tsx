import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import { RootState } from "../state/store";
import { setToUsername } from "../state/tousername/toUserSlice";

function FriendList() {
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
  ];
  const toUser = useSelector((state: RootState) => state.toUser);
  const dispatch = useDispatch();

  return (
    <div className="overflow-y-scroll no-scrollbar max-h-[85vh]">
      <ul className="">
        {names.map((name) => {
          return (
            <li
              key={name}
              className={`py-2 px-4 flex items-center space-x-2 border-b cursor-pointer ${
                name === toUser.username
                  ? "bg-gray-200 hover:bg-gray-300"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => {
                dispatch(setToUsername(name));
              }}
            >
              <div className="relative w-10 h-10">
                <Avatar src="https://picsum.photos/200" />
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
                    <span className="text-gray-500">{name}</span>: Hello Whats
                    the plan today?
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
