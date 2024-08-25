export default function ChatStatus() {
  return (
    <div className="flex px-8 py-3 border-b space-x-2">
      <button className="bg-orange-600 text-white rounded-full px-2 border">
        All
      </button>
      <button className="rounded-full px-2 border-2 text-gray-600">
        Unread
      </button>
    </div>
  );
}
