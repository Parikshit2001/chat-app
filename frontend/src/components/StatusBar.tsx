import Avatar from "./Avatar";

function StatusBar() {
  return (
    <div className="flex bg-gray-100 py-3 border-b px-4 space-x-2 items-center ">
      <div>
        <Avatar src="" />
      </div>
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col justify-between">
          <div className="flex space-x-1 items-center">
            <p className="font-bold">Kristine</p>
            <div className="bg-green-500 w-2 h-2 rounded-full" />
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
