import Attachment from "./Attachment";
import SendIcon from "./SendIcon";

function Send() {
  return (
    <div className="flex bg-gray-100 w-full mx-12 py-2 rounded-lg space-x-4 px-2 items-center">
      <div className="w-full">
        <input
          className="w-full bg-gray-100 outline-none px-2 text-xl py-2 placeholder:text-gray-400 placeholder:text-lg"
          type="text"
          placeholder="Type your message here"
        />
      </div>
      <button className="text-orange-600">
        <Attachment />
      </button>
      <button className="bg-orange-200 text-orange-600 px-2 py-2 rounded-lg">
        <SendIcon />
      </button>
    </div>
  );
}

export default Send;
