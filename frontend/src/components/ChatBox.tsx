function ChatBox() {
  const data = [
    { id: "1", from: "u1", to: "u2", message: "hi adsnf adsoin adosn weaoji qwoeq wodew qwed oqwejo wqeioiewd qodewq qwedo wqed oweqid weqd iwedqj eowqdj ewqd qdwoeij oqwei woeqij weodj dqoew jwedoqij edwo jdewqoij wdeqoj dewoiewjqd " },
    { id: "2", from: "u2", to: "u1", message: "hello" },
    { id: "3", from: "u1", to: "u2", message: "how are you" },
    { id: "4", from: "u2", to: "u1", message: "i am fine" },
    { id: "5", from: "u1", to: "u2", message: "i am also fine" },
    { id: "6", from: "u2", to: "u1", message: "thank you" },
    { id: "7", from: "u1", to: "u2", message: "Tell me about yourself" },
    { id: "8", from: "u2", to: "u1", message: "I am your friend" },
    { id: "9", from: "u1", to: "u2", message: "hi" },
    { id: "10", from: "u2", to: "u1", message: "hello" },
  ];
  return (
    <div className="h-full flex flex-col-reverse overflow-y-scroll no-scrollbar max-h-[80vh]">
      {data.map((chat) => (
        <div
          key={chat.id}
          className={`flex ${
            chat.from === "u1" ? "justify-end" : "justify-start"
          }`}
        >
          <div className={`max-w-[60%] border p-5 m-2 rounded-lg ${ chat.from === "u1" ? "bg-orange-600 text-white" : "bg-gray-200"}`}>{chat.message}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
