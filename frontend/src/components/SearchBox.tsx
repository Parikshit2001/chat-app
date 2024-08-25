import SearchIcon from "./SearchIcon";

function SearchBox() {
  return (
    <div className="px-8 flex flex-col justify-center h-full">
      <div className="flex border-gray-300 border-2 bg-gray-100 py-2 px-2 rounded-lg">
        <SearchIcon />
        <input
          className="w-full bg-gray-100 text-xl outline-none pl-1.5"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBox;
