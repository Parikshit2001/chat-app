import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import { RootState } from "../state/store";
import { setToUsername } from "../state/tousername/toUserSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import LoadingState from "./Loading";

function FriendList() {
  const [usernames, setUsernames] = useState<string[]>([]);
  const username = useSelector((state: RootState) => state.username.username);
  const toUser = useSelector((state: RootState) => state.toUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${URL}/api/user/getusers`, { withCredentials: true })
      .then((res) => {
        const data = res.data as {
          message: string;
          users: { username: string }[];
        };
        const names = data.users.map((user) => user.username);
        setUsernames(names);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;

  return (
    <div className="overflow-y-scroll no-scrollbar max-h-[85vh]">
      <ul className="">
        {usernames.map((name) => {
          if (name === username) {
            return null;
          }
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
